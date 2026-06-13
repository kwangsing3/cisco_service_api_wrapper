import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

type RmaQueryOpts = {
  fromDate?: string;
  toDate?: string;
  status?: 'open' | 'booked' | 'hold' | 'closed' | 'cancelled';
  sortBy?: 'orderdate' | 'status';
};

export async function getRmaDetailsByRmaNumber(
  rma_numbers: number
): Promise<any> {
  return (await GET(ep.rma.byRmaNumber(rma_numbers), GetHeader())).data;
}

export async function getRmasByUserId(
  user_ids: string,
  opts?: RmaQueryOpts
): Promise<any> {
  return (await GET(buildUrl(ep.rma.byUserId(user_ids), opts), GetHeader()))
    .data;
}
