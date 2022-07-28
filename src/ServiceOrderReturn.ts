/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
import {GET} from './utility/httpmethod';
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/return/v1.0';

export class ServiceOrderReturn {
  async GETRMADetailsbyRMANumber(rma_numbers: number): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/returns/rma_numbers/{rma_numbers}';
    const arr = c_module.GetParams(entity.GETRMADetailsbyRMANumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      rma_numbers: rma_numbers,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GETRMAsbyUserID(
    user_ids: string,
    fromDate?: string,
    toDate?: string,
    status?: 'open' | 'booked' | 'hold' | 'closed' | 'cancelled',
    sortBy?: 'orderdate' | 'status'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/returns/users/user_ids/{user_ids}';
    const arr = c_module.GetParams(entity.GETRMAsbyUserID);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      user_ids: user_ids,
      fromDate: fromDate,
      toDate: toDate,
      status: status,
      sortBy: sortBy,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
}
const entity = new ServiceOrderReturn();
