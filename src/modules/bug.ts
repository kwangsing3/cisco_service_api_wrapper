import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

type BugQueryOpts = {
  page_index?: number;
  status?: 'O' | 'F' | 'T';
  modified_date?: '1' | '2' | '3' | '4' | '5';
  severity?: '1' | '2' | '3' | '4' | '5' | '6';
  sort_by?:
    | 'status'
    | 'modified_date'
    | 'severity'
    | 'support_case_count'
    | 'modified_date_earliest';
};

export async function getBugDetailsById(bug_ids: string): Promise<any> {
  return (await GET(ep.bug.byBugIds(bug_ids), GetHeader())).data;
}

export async function getBugsByProductId(
  base_pid: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (await GET(buildUrl(ep.bug.byProductId(base_pid), opts), GetHeader()))
    .data;
}

export async function getBugsByProductIdAndRelease(
  base_pid: string,
  software_releases: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.bug.byProductIdAndRelease(base_pid, software_releases), opts),
      GetHeader()
    )
  ).data;
}

export async function searchBugsByKeyword(
  keyword: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(buildUrl(ep.bug.byKeyword(), {keyword, ...opts}), GetHeader())
  ).data;
}

export async function searchBugsByProductSeriesAndAffectedRelease(
  product_series: string,
  affected_releases: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(
        ep.bug.byProductSeriesAffectedRelease(
          product_series,
          affected_releases
        ),
        opts
      ),
      GetHeader()
    )
  ).data;
}

export async function searchBugsByProductSeriesAndFixedRelease(
  product_series: string,
  fixed_in_releases: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(
        ep.bug.byProductSeriesFixedRelease(product_series, fixed_in_releases),
        opts
      ),
      GetHeader()
    )
  ).data;
}

export async function searchBugsByProductNameAndAffectedRelease(
  product_name: string,
  affected_releases: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(
        ep.bug.byProductNameAffectedRelease(product_name, affected_releases),
        opts
      ),
      GetHeader()
    )
  ).data;
}

export async function searchBugsByProductNameAndFixedRelease(
  product_name: string,
  fixed_in_releases: string,
  opts?: BugQueryOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(
        ep.bug.byProductNameFixedRelease(product_name, fixed_in_releases),
        opts
      ),
      GetHeader()
    )
  ).data;
}
