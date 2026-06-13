import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {SSEServerTransport} from '@modelcontextprotocol/sdk/server/sse.js';
import {StreamableHTTPServerTransport} from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import {createServer, type IncomingMessage, type ServerResponse} from 'node:http';
import {z} from 'zod';
import {Init} from './cds';
import * as asd from './modules/automated-software-distribution';
import * as bug from './modules/bug';
import * as cas from './modules/case';
import * as eox from './modules/eox';
import * as product from './modules/product-information';
import * as sn from './modules/serial-number';
import * as rma from './modules/service-order-return';
import * as sw from './modules/software-suggestion';

// ── Shared Zod schema fragments ───────────────────────────────────────────────

const BugOpts = {
  page_index: z.number().optional(),
  status: z.enum(['O', 'F', 'T']).optional().describe('O=Open F=Fixed T=Terminated'),
  modified_date: z.enum(['1', '2', '3', '4', '5']).optional().describe('1=2wk 2=1mo 3=3mo 4=6mo 5=1yr'),
  severity: z.enum(['1', '2', '3', '4', '5', '6']).optional(),
  sort_by: z.enum(['status', 'modified_date', 'severity', 'support_case_count', 'modified_date_earliest']).optional(),
};

const CaseOpts = {
  date_created_from: z.string().optional().describe('YYYY-MM-DD'),
  date_created_to: z.string().optional().describe('YYYY-MM-DD'),
  status_flag: z.enum(['O', 'C']).optional().describe('O=Open C=Closed'),
  sort_by: z.enum(['UPDATED_DATE', 'STATUS']).optional(),
  page_index: z.number().optional(),
};

const CompatibleOpts = {
  currentImage: z.string().optional(),
  currentRelease: z.string().optional(),
  pageIndex: z.number().optional(),
  supportedFeatures: z.string().optional(),
  supportedHardware: z.string().optional(),
};

// ── Response helpers ──────────────────────────────────────────────────────────

function ok(data: unknown) {
  return {content: [{type: 'text' as const, text: JSON.stringify(data, null, 2)}]};
}

function fail(msg: string) {
  return {content: [{type: 'text' as const, text: msg}], isError: true};
}

async function call<T>(fn: () => Promise<T>) {
  try {
    const result = await fn();
    return result == null ? fail('API returned no data') : ok(result);
  } catch (err) {
    return fail(err instanceof Error ? err.message : String(err));
  }
}

// ── Tool registration ─────────────────────────────────────────────────────────

function registerTools(server: McpServer) {
  // ── Bug ───────────────────────────────────────────────────────────────────
  server.tool('bug_getDetailsById',
    'Get detailed information for one or more Cisco bug IDs (comma-separated)',
    {bug_ids: z.string().describe('Comma-separated bug IDs e.g. CSCvz12345')},
    ({bug_ids}) => call(() => bug.getBugDetailsById(bug_ids)));

  server.tool('bug_getByProductId',
    'Get bugs associated with a base product ID',
    {base_pid: z.string(), ...BugOpts},
    ({base_pid, ...opts}) => call(() => bug.getBugsByProductId(base_pid, opts)));

  server.tool('bug_getByProductIdAndRelease',
    'Get bugs for a product ID filtered by software release',
    {base_pid: z.string(), software_releases: z.string(), ...BugOpts},
    ({base_pid, software_releases, ...opts}) => call(() => bug.getBugsByProductIdAndRelease(base_pid, software_releases, opts)));

  server.tool('bug_searchByKeyword',
    'Search Cisco bugs by keyword',
    {keyword: z.string(), ...BugOpts},
    ({keyword, ...opts}) => call(() => bug.searchBugsByKeyword(keyword, opts)));

  server.tool('bug_searchByProductSeriesAndAffectedRelease',
    'Search bugs by hardware product series and affected software release',
    {product_series: z.string(), affected_releases: z.string(), ...BugOpts},
    ({product_series, affected_releases, ...opts}) => call(() => bug.searchBugsByProductSeriesAndAffectedRelease(product_series, affected_releases, opts)));

  server.tool('bug_searchByProductSeriesAndFixedRelease',
    'Search bugs by hardware product series and the release that fixed them',
    {product_series: z.string(), fixed_in_releases: z.string(), ...BugOpts},
    ({product_series, fixed_in_releases, ...opts}) => call(() => bug.searchBugsByProductSeriesAndFixedRelease(product_series, fixed_in_releases, opts)));

  server.tool('bug_searchByProductNameAndAffectedRelease',
    'Search bugs by product name and affected software release',
    {product_name: z.string(), affected_releases: z.string(), ...BugOpts},
    ({product_name, affected_releases, ...opts}) => call(() => bug.searchBugsByProductNameAndAffectedRelease(product_name, affected_releases, opts)));

  server.tool('bug_searchByProductNameAndFixedRelease',
    'Search bugs by product name and the release that fixed them',
    {product_name: z.string(), fixed_in_releases: z.string(), ...BugOpts},
    ({product_name, fixed_in_releases, ...opts}) => call(() => bug.searchBugsByProductNameAndFixedRelease(product_name, fixed_in_releases, opts)));

  // ── Case ──────────────────────────────────────────────────────────────────
  server.tool('case_getSummary',
    'Get brief summary for one or more TAC case IDs (comma-separated)',
    {case_ids: z.string(), sort_by: z.enum(['UPDATED_DATE', 'STATUS']).optional()},
    ({case_ids, sort_by}) => call(() => cas.getCaseSummary(case_ids, sort_by)));

  server.tool('case_getDetails',
    'Get full details for a single TAC case ID',
    {case_id: z.string()},
    ({case_id}) => call(() => cas.getCaseDetails(case_id)));

  server.tool('case_getByContractId',
    'Get cases associated with one or more contract IDs (comma-separated)',
    {contract_ids: z.string(), ...CaseOpts},
    ({contract_ids, ...opts}) => call(() => cas.getCasesByContractId(contract_ids, opts)));

  server.tool('case_getByUserId',
    'Get cases associated with one or more user IDs (comma-separated)',
    {user_ids: z.string(), ...CaseOpts},
    ({user_ids, ...opts}) => call(() => cas.getCasesByUserId(user_ids, opts)));

  // ── EoX ───────────────────────────────────────────────────────────────────
  server.tool('eox_getByDates',
    'Get End-of-Life records updated within a date range',
    {
      startDate: z.string().describe('YYYY-MM-DD'),
      endDate: z.string().describe('YYYY-MM-DD'),
      pageIndex: z.number().optional(),
      eoxAttrib: z.enum(['EO_EXT_ANNOUNCE_DATE','EO_SALES_DATE','EO_FAIL_ANALYSIS_DATE','EO_SVC_ATTACH_DATE','EO_SW_MAINTENANCE_DATE','EO_SECURITY_VUL_SUPPORT_DATE','EO_CONTRACT_RENEW_DATE','EO_LAST_SUPPORT_DATE','UPDATE_TIMESTAMP']).optional(),
    },
    ({startDate, endDate, pageIndex, eoxAttrib}) => call(() => eox.getEoxByDates(startDate, endDate, pageIndex, eoxAttrib)));

  server.tool('eox_getByProductIds',
    'Get End-of-Life records for one or more product IDs (comma-separated)',
    {productID: z.string(), pageIndex: z.number().optional()},
    ({productID, pageIndex}) => call(() => eox.getEoxByProductIds(productID, pageIndex)));

  server.tool('eox_getBySerialNumbers',
    'Get End-of-Life records for one or more serial numbers (comma-separated)',
    {serialNumber: z.string(), pageIndex: z.number().optional()},
    ({serialNumber, pageIndex}) => call(() => eox.getEoxBySerialNumbers(serialNumber, pageIndex)));

  server.tool('eox_getBySoftwareRelease',
    'Get End-of-Life records for products associated with a software release string',
    {input: z.string(), pageIndex: z.number()},
    ({input, pageIndex}) => call(() => eox.getEoxBySoftwareRelease(input, pageIndex)));

  // ── Product Information ───────────────────────────────────────────────────
  server.tool('product_getInfoBySerialNumbers',
    'Get product information for one or more serial numbers (comma-separated)',
    {serial_numbers: z.string(), page_index: z.number().optional()},
    ({serial_numbers, page_index}) => call(() => product.getInfoBySerialNumbers(serial_numbers, page_index)));

  server.tool('product_getInfoByProductIds',
    'Get product information for one or more product IDs (comma-separated)',
    {product_ids: z.string(), page_index: z.number().optional()},
    ({product_ids, page_index}) => call(() => product.getInfoByProductIds(product_ids, page_index)));

  server.tool('product_getMdfByProductIds',
    'Get MDF (Metadata Framework) identifiers for one or more product IDs',
    {product_ids: z.string(), page_index: z.number().optional()},
    ({product_ids, page_index}) => call(() => product.getMdfByProductIds(product_ids, page_index)));

  // ── Serial Number to Information ──────────────────────────────────────────
  server.tool('sn_getCoverageStatus',
    'Get warranty/contract coverage status for one or more serial numbers (comma-separated)',
    {sr_no: z.string()},
    ({sr_no}) => call(() => sn.getCoverageStatusBySerialNumbers(sr_no)));

  server.tool('sn_getCoverageSummaryBySerialNumbers',
    'Get coverage summary including warranty and product details by serial numbers',
    {sr_no: z.string(), page_index: z.number().optional()},
    ({sr_no, page_index}) => call(() => sn.getCoverageSummaryBySerialNumbers(sr_no, page_index)));

  server.tool('sn_getCoverageSummaryByInstanceNumbers',
    'Get coverage summary by instance numbers',
    {instance_no: z.string(), page_index: z.number().optional()},
    ({instance_no, page_index}) => call(() => sn.getCoverageSummaryByInstanceNumbers(instance_no, page_index)));

  server.tool('sn_getOrderableIdentifiers',
    'Get the orderable product identifier (PID) for a serial number',
    {sr_no: z.string()},
    ({sr_no}) => call(() => sn.getOrderableIdentifiersBySerialNumbers(sr_no)));

  server.tool('sn_getOwnerCoverageStatus',
    'Get owner coverage status for one or more serial numbers',
    {sr_no: z.string()},
    ({sr_no}) => call(() => sn.getOwnerCoverageStatusBySerialNumbers(sr_no)));

  // ── Service Order Return (RMA) ────────────────────────────────────────────
  server.tool('rma_getDetailsByRmaNumber',
    'Get detailed information about a specific RMA',
    {rma_numbers: z.number()},
    ({rma_numbers}) => call(() => rma.getRmaDetailsByRmaNumber(rma_numbers)));

  server.tool('rma_getByUserId',
    'Get RMAs associated with a user (defaults to last 30 days)',
    {
      user_ids: z.string(),
      fromDate: z.string().optional().describe('YYYY-MM-DD'),
      toDate: z.string().optional().describe('YYYY-MM-DD'),
      status: z.enum(['open', 'booked', 'hold', 'closed', 'cancelled']).optional(),
      sortBy: z.enum(['orderdate', 'status']).optional(),
    },
    ({user_ids, ...opts}) => call(() => rma.getRmasByUserId(user_ids, opts)));

  // ── Software Suggestion ───────────────────────────────────────────────────
  server.tool('sw_getSuggestedReleasesAndImagesByProductIds',
    'Get suggested software releases and images for a list of product IDs',
    {productIds: z.string(), pageIndex: z.number().optional()},
    ({productIds, pageIndex}) => call(() => sw.getSuggestedReleasesAndImagesByProductIds(productIds, pageIndex)));

  server.tool('sw_getSuggestedReleasesByProductIds',
    'Get suggested software releases (no images) for a list of product IDs',
    {productIds: z.string(), pageIndex: z.number().optional()},
    ({productIds, pageIndex}) => call(() => sw.getSuggestedReleasesByProductIds(productIds, pageIndex)));

  server.tool('sw_getCompatibleReleasesByProductId',
    'Get compatible and suggested software releases for a product given its current image/release',
    {productId: z.string(), ...CompatibleOpts},
    ({productId, ...opts}) => call(() => sw.getCompatibleReleasesByProductId(productId, opts)));

  server.tool('sw_getSuggestedReleasesAndImagesByMdfIds',
    'Get suggested software releases and images for a list of MDF IDs',
    {mdfId: z.string(), pageIndex: z.number().optional()},
    ({mdfId, pageIndex}) => call(() => sw.getSuggestedReleasesAndImagesByMdfIds(mdfId, pageIndex)));

  server.tool('sw_getSuggestedReleasesByMdfIds',
    'Get suggested software releases (no images) for a list of MDF IDs',
    {mdfId: z.string(), pageIndex: z.number().optional()},
    ({mdfId, pageIndex}) => call(() => sw.getSuggestedReleasesByMdfIds(mdfId, pageIndex)));

  server.tool('sw_getCompatibleAndSuggestedReleasesByMdfId',
    'Get compatible and suggested software releases for a product given its MDF ID and current software',
    {mdfId: z.string(), ...CompatibleOpts, supportedFeatures: z.enum(['orderdate', 'status']).optional()},
    ({mdfId, ...opts}) => call(() => sw.getCompatibleAndSuggestedReleasesByMdfId(mdfId, opts)));

  // ── Automated Software Distribution ──────────────────────────────────────
  server.tool('asd_getSoftwareReleaseByPid',
    'Get software release information for a device by PID and release version',
    {
      pid: z.string(),
      currentReleaseVersion: z.string(),
      outputReleaseVersion: z.string().describe('Latest | Above | specific version'),
      pageIndex: z.number(),
      perPage: z.number(),
    },
    (input) => call(() => asd.postSoftwareReleaseByPid(input)));

  server.tool('asd_getSoftwareReleaseByImage',
    'Get software release information for a device by PID and image names',
    {
      pid: z.string(),
      imageNames: z.array(z.string()),
      pageIndex: z.number(),
      perPage: z.number(),
    },
    (input) => call(() => asd.postSoftwareReleaseByImage(input)));

  server.tool('asd_getK9Agreement',
    'Get the current user K9 (encryption) agreement status',
    {},
    () => call(() => asd.getK9Agreement()));

  server.tool('asd_getEulaAgreement',
    'Get the current user EULA agreement status',
    {},
    () => call(() => asd.getEulaAgreement()));

  server.tool('asd_getDownloadVariant',
    'Get software download URLs for specified image GUIDs (1–5 GUIDs)',
    {
      pid: z.string(),
      mdfId: z.string(),
      metadataTransId: z.string(),
      imageGuids: z.array(z.string()).min(1).max(5),
    },
    (input) => call(() => asd.postDownloadVariant(input)));

  server.tool('asd_getSoftwareStatus',
    'Get software status for given image names',
    {imageNames: z.array(z.string()).min(1).max(5)},
    (input) => call(() => asd.postSoftwareStatus(input)));
}

// ── Transport startup ─────────────────────────────────────────────────────────

async function startStdio(server: McpServer) {
  await server.connect(new StdioServerTransport());
}

async function startSSE(server: McpServer, port: number) {
  const sessions = new Map<string, SSEServerTransport>();

  const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/sse') {
      const transport = new SSEServerTransport('/message', res);
      sessions.set(transport.sessionId, transport);
      res.on('close', () => sessions.delete(transport.sessionId));
      await server.connect(transport);
    } else if (req.method === 'POST' && req.url?.startsWith('/message')) {
      const sessionId = new URL(req.url, `http://localhost`).searchParams.get('sessionId') ?? '';
      const transport = sessions.get(sessionId);
      if (!transport) { res.writeHead(404).end('Session not found'); return; }
      let body = '';
      req.on('data', (chunk: Buffer) => (body += chunk));
      req.on('end', async () => { await transport.handlePostMessage(req, res, JSON.parse(body)); });
    } else {
      res.writeHead(404).end();
    }
  });

  httpServer.listen(port, () => console.error(`MCP SSE server listening on http://localhost:${port}/sse`));
}

async function startStreamableHTTP(server: McpServer, port: number) {
  const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/mcp') {
      const transport = new StreamableHTTPServerTransport({sessionIdGenerator: undefined});
      await server.connect(transport);
      let body = '';
      req.on('data', (chunk: Buffer) => (body += chunk));
      req.on('end', async () => { await transport.handleRequest(req, res, JSON.parse(body || '{}')); });
    } else {
      res.writeHead(404).end();
    }
  });

  httpServer.listen(port, () => console.error(`MCP HTTP server listening on http://localhost:${port}/mcp`));
}

// ── Entry point ───────────────────────────────────────────────────────────────

async function main() {
  const clientId = process.env['CISCO_CLIENT_ID'];
  const clientSecret = process.env['CISCO_CLIENT_SECRET'];

  if (!clientId || !clientSecret) {
    console.error('Error: CISCO_CLIENT_ID and CISCO_CLIENT_SECRET environment variables are required');
    process.exit(1);
  }

  try {
    await Init({client_id: clientId, client_serect: clientSecret});
  } catch (err) {
    console.error('Failed to authenticate with Cisco API:', err);
    process.exit(1);
  }

  const server = new McpServer({name: 'cisco-support', version: '1.0.0'});
  registerTools(server);

  const transport = process.env['MCP_TRANSPORT'] ?? 'stdio';
  const port = parseInt(process.env['MCP_PORT'] ?? '3000');

  switch (transport) {
    case 'stdio': await startStdio(server); break;
    case 'sse':   await startSSE(server, port); break;
    case 'http':  await startStreamableHTTP(server, port); break;
    default:
      console.error(`Unknown transport: ${transport}. Use stdio | sse | http`);
      process.exit(1);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
