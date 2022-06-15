/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
const axios = require('axios');
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/bug/v2.0';

export class Bugs {
  async GetBugDetailsbyBugIDs(bug_ids: string): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + `/bugs/bug_ids/${bug_ids}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetBugsbyBaseProductID(
    base_pid: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + `/bugs/products/product_id/${base_pid}`;
    const arr = c_module.GetParams(this.GetBugsbyBaseProductID);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      base_pid: base_pid,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetBugsbyBaseProductIDandSoftwareReleases(
    base_pid: string,
    software_releases: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      `/bugs/products/product_id/${base_pid}/software_releases/${software_releases}`;
    const arr = c_module.GetParams(
      this.GetBugsbyBaseProductIDandSoftwareReleases
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      base_pid: base_pid,
      software_releases: software_releases,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSearchforBugsbyKeyword(
    keyword: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/bugs/keyword/cisco';
    const arr = c_module.GetParams(this.GetSearchforBugsbyKeyword);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      keyword: keyword,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSearchBugsbyProductSeriesAndAffectedSoftware(
    product_series: string,
    affected_releases: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      `/bugs/product_series/${product_series}/affected_releases/${affected_releases}`;
    const arr = c_module.GetParams(
      this.GetSearchBugsbyProductSeriesAndAffectedSoftware
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_series: product_series,
      affected_releases: affected_releases,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSearchBugsbyProductSeriesAndFixedInSoftware(
    product_series: string,
    fixed_in_releases: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      `/bugs/product_series/${product_series}/affected_releases/${fixed_in_releases}`;
    const arr = c_module.GetParams(
      this.GetSearchBugsbyProductSeriesAndFixedInSoftware
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_series: product_series,
      fixed_in_releases: fixed_in_releases,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSearchBugsbyProductNameAndAffectedSoftware(
    product_name: string,
    affected_releases: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      `/bugs/product_name/${product_name}/affected_releases${affected_releases}`;
    const arr = c_module.GetParams(
      this.GetSearchBugsbyProductNameAndAffectedSoftware
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_name: product_name,
      affected_releases: affected_releases,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSearchBugsbyProductNameAndFixedInSoftware(
    product_name: string,
    fixed_in_releases: string,
    page_index?: number,
    status?: 'O' | 'F' | 'T',
    modified_date?: '1' | '2' | '3' | '4' | '5',
    severity?: '1' | '2' | '3' | '4' | '5' | '6',
    sort_by?:
      | 'status'
      | 'modified_date '
      | 'severity'
      | 'support_case_count'
      | 'modified_date_earliest '
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      `/bugs/product_name/${product_name}/fixed_in_releases${fixed_in_releases}`;
    const arr = c_module.GetParams(
      this.GetSearchBugsbyProductNameAndFixedInSoftware
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      product_name: product_name,
      fixed_in_releasess: fixed_in_releases,
      page_index: page_index,
      status: status,
      modified_date: modified_date,
      severity: severity,
      sort_by: sort_by,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
