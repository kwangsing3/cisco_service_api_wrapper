import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

type CaseQueryOpts = {
  date_created_from?: string;
  date_created_to?: string;
  status_flag?: 'O' | 'C';
  sort_by?: 'UPDATED_DATE' | 'STATUS';
  page_index?: number;
};

export async function getCaseSummary(
  case_ids: string,
  sort_by?: 'UPDATED_DATE' | 'STATUS'
): Promise<any> {
  return (
    await GET(buildUrl(ep.case.summary(case_ids), {sort_by}), GetHeader())
  ).data;
}

export async function getCaseDetails(case_id: string): Promise<any> {
  return (await GET(ep.case.details(case_id), GetHeader())).data;
}

export async function getCasesByContractId(
  contract_ids: string,
  opts?: CaseQueryOpts
): Promise<any> {
  return (
    await GET(buildUrl(ep.case.byContract(contract_ids), opts), GetHeader())
  ).data;
}

export async function getCasesByUserId(
  user_ids: string,
  opts?: CaseQueryOpts
): Promise<any> {
  return (await GET(buildUrl(ep.case.byUser(user_ids), opts), GetHeader()))
    .data;
}
