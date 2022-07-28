/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
import axios from 'axios';
import * as c_module from './common';
import {GET} from './utility/httpmethod';

const baseURL = 'https://api.cisco.com/supporttools/eox/rest/5';

export class Eox {
  async GetCaseSummary(
    startDate: string | '2010-01-01',
    endDate: string | '2010-01-01',
    pageIndex = 1,
    eoxAttrib?:
      | 'EO_EXT_ANNOUNCE_DATE'
      | 'EO_SALES_DATE'
      | 'EO_FAIL_ANALYSIS_DATE'
      | 'EO_SVC_ATTACH_DATE'
      | 'EO_SW_MAINTENANCE_DATE'
      | 'EO_SECURITY_VUL_SUPPORT_DATE'
      | 'EO_CONTRACT_RENEW_DATE'
      | 'EO_LAST_SUPPORT_DATE'
      | 'UPDATE_TIMESTAMP ',
    responseencoding?: 'xml' | 'json'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/EOXByDates/{pageIndex}/{startDate}/{endDate}';
    const arr = c_module.GetParams(entity.GetCaseSummary);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      startDate: startDate,
      endDate: endDate,
      pageIndex: pageIndex,
      eoxAttrib: eoxAttrib,
      responseencoding: responseencoding,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetEoXbyProductIDs(
    productID: string,
    pageIndex = 1,
    responseencoding?: 'xml' | 'json'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/EOXByProductID/{pageIndex}/{productID}';
    const arr = c_module.GetParams(entity.GetEoXbyProductIDs);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      productID: productID,
      pageIndex: pageIndex,
      responseencoding: responseencoding,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetEoXBySerialNumbers(
    serialNumber: string,
    pageIndex = 1,
    responseencoding?: 'xml' | 'json'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/EOXBySerialNumber/{pageIndex}/{serialNumber}';
    const arr = c_module.GetParams(entity.GetEoXBySerialNumbers);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      serialNumber: serialNumber,
      pageIndex: pageIndex,
      responseencoding: responseencoding,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetEoXbySoftwareReleaseStrings(
    input: string,
    pageIndex: number,
    responseencoding?: 'xml' | 'json'
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/EOXBySWReleaseString/{pageIndex}/{input}';
    const arr = c_module.GetParams(entity.GetEoXbySoftwareReleaseStrings);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      input: input,
      pageIndex: pageIndex,
      responseencoding: responseencoding,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
}
const entity = new Eox();
