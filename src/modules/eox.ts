import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

type EoxAttrib =
  | 'EO_EXT_ANNOUNCE_DATE'
  | 'EO_SALES_DATE'
  | 'EO_FAIL_ANALYSIS_DATE'
  | 'EO_SVC_ATTACH_DATE'
  | 'EO_SW_MAINTENANCE_DATE'
  | 'EO_SECURITY_VUL_SUPPORT_DATE'
  | 'EO_CONTRACT_RENEW_DATE'
  | 'EO_LAST_SUPPORT_DATE'
  | 'UPDATE_TIMESTAMP';

export async function getEoxByDates(
  startDate: string,
  endDate: string,
  pageIndex = 1,
  eoxAttrib?: EoxAttrib,
  responseencoding?: 'xml' | 'json'
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.eox.byDates(pageIndex, startDate, endDate), {
        eoxAttrib,
        responseencoding,
      }),
      await GetHeader()
    )
  ).data;
}

export async function getEoxByProductIds(
  productID: string,
  pageIndex = 1,
  responseencoding?: 'xml' | 'json'
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.eox.byProductIds(pageIndex, productID), {responseencoding}),
      await GetHeader()
    )
  ).data;
}

export async function getEoxBySerialNumbers(
  serialNumber: string,
  pageIndex = 1,
  responseencoding?: 'xml' | 'json'
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.eox.bySerialNumbers(pageIndex, serialNumber), {
        responseencoding,
      }),
      await GetHeader()
    )
  ).data;
}

export async function getEoxBySoftwareRelease(
  inputs: string[],
  pageIndex: number,
  responseencoding?: 'xml' | 'json'
): Promise<any> {
  const queryParams: Record<string, string | undefined> = {responseencoding};
  inputs.slice(0, 20).forEach((v, i) => { queryParams[`input${i + 1}`] = v; });
  return (
    await GET(
      buildUrl(ep.eox.bySoftwareRelease(pageIndex), queryParams),
      await GetHeader()
    )
  ).data;
}
