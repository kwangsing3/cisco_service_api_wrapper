/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
import {GET, POST} from './utility/httpmethod';
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/software/v4.0';

export class AutomatedSoftwareDistribution {
  async PostSoftwareReleaseByPID(input: {
    pid: string;
    currentReleaseVersion: string;
    outputReleaseVersion: 'Latest' | 'Above' | string;
    pageIndex: number;
    perPage: number;
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/metadata/pidrelease';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
  async PostSoftwareReleaseByImage(input: {
    pid: string;
    imageNames: string[];
    pageIndex: number;
    perPage: number;
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/k9';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
  async GetK9Agreement(): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/k9';
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async GetEULAAgreement(): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/eula';
    const data: any = await GET(targetURL, header);
    return data.data;
  }
  async PostK9Agreement(input: {
    status: 'Accepted' | 'Declined';
    declineComments: number;
    fileNames: string;
    confirm: 'Confirm_Checked';
    busFunction: 'COMM_OR_CIVIL';
    govMilCountries: 'GOV_OR_MIL';
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/k9';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
  async PostEULAAgreement(input: {
    status: 'Accepted' | 'Declined';
    declineComments: number;
    fileNames: string;
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/eula';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
  async PostDownloadVariant(input: {
    pid: string;
    mdfId: string;
    metadataTransId: string;
    imageGuids: string[1] | string[5];
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/download/pidimage';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
  async PostSoftwareStatusVariant(input: {
    imageNames: string[1] | string[5];
  }): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/metadata/images';
    const data: any = await POST(targetURL, input, header);
    return data.data;
  }
}
const entity = new AutomatedSoftwareDistribution();
