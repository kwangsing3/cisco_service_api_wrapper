/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
import {GET} from './utility/httpmethod';
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/product/v1';

export class ProductInformation {
  async GetInformationbySerialNumber(
    serial_numbers: string,
    page_index?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/information/serial_numbers/{serial_numbers}';
    const arr = c_module.GetParams(this.GetInformationbySerialNumber);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      serial_numbers: serial_numbers,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }

  async GetInformationbyProductIdentifier(
    product_ids: string,
    page_index?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/information/product_ids/{product_ids}';
    const arr = c_module.GetParams(this.GetInformationbyProductIdentifier);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_ids: product_ids,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetMDFbyProductId(
    product_ids: string,
    page_index?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/information/product_ids_mdf/{product_ids}';
    const arr = c_module.GetParams(this.GetMDFbyProductId);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_ids: product_ids,
      page_index: page_index,
    });
    const data: any = await GET(targetURL, header);
    return data.data;
  }
}
const entity = new ProductInformation();
