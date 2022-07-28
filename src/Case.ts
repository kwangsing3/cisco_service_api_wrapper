/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
import {GET} from './utility/httpmethod';
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/case/v3';

export class Case {
  async GetCaseSummary(
    case_ids: string,
    sort_by?: 'UPDATED_DATE' | 'STATUS'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + `/cases/case_ids/${case_ids}`;
    const arr = c_module.GetParams(entity.GetCaseSummary);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      case_ids: case_ids,
      sort_by: sort_by,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetCaseDetails(case_ids: string): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + `/cases/details/case_id/${case_ids}`;
    const arr = c_module.GetParams(entity.GetCaseDetails);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      case_ids: case_ids,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetCaseByContractID(
    contract_ids: string,
    date_created_from?: string,
    date_created_to?: string,
    status_flag?: 'O' | 'C',
    sort_by?: 'UPDATED_DATE' | 'STATUS',
    page_index?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + `/cases/contracts/contract_ids/${contract_ids}`;
    const arr = c_module.GetParams(entity.GetCaseByContractID);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      contract_ids: contract_ids,
      date_created_from: date_created_from,
      date_created_to: date_created_to,
      status_flag: status_flag,
      sort_by: sort_by,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetCaseByUserID(
    user_ids: string,
    date_created_from?: string,
    date_created_to?: string,
    status_flag?: 'O' | 'C',
    sort_by?: 'UPDATED_DATE' | 'STATUS',
    page_index?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + `/cases/users/user_ids/${user_ids}`;
    const arr = c_module.GetParams(entity.GetCaseByUserID);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      user_ids: user_ids,
      date_created_from: date_created_from,
      date_created_to: date_created_to,
      status_flag: status_flag,
      sort_by: sort_by,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
}
const entity = new Case();
