/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
import {GET} from './utility/httpmethod';
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/sn2info/v2';

export class SerialNumberToInformation {
  async GetCoverageStatusbySerialNumber(sr_no: string): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/coverage/status/serial_numbers/{sr_no}';
    const arr = c_module.GetParams(entity.GetCoverageStatusbySerialNumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      sr_no: sr_no,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetCoverageSummarybySerialNumber(
    sr_no: string,
    page_index = 1
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/coverage/summary/serial_numbers/{sr_no}';
    const arr = c_module.GetParams(entity.GetCoverageSummarybySerialNumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      sr_no: sr_no,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetCoverageSummarybyInstanceNumber(
    instance_no: string,
    page_index = 1
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/coverage/summary/instance_numbers/{instance_no}';
    const arr = c_module.GetParams(entity.GetCoverageSummarybyInstanceNumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      instance_no: instance_no,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetOrderableProductIdentifierbySerialNumber(
    sr_no: string
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/identifiers/orderable/serial_numbers/{sr_no}';
    const arr = c_module.GetParams(
      entity.GetOrderableProductIdentifierbySerialNumber
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      sr_no: sr_no,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetOwnerCoverageStatusbySerialNumber(sr_no: string): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/coverage/owner_status/serial_numbers/{sr_no}';
    const arr = c_module.GetParams(entity.GetOwnerCoverageStatusbySerialNumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      sr_no: sr_no,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
}
const entity = new SerialNumberToInformation();
