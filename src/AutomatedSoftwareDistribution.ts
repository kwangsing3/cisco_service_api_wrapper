/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
const axios = require('axios');
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/software/v4.0';

export class AutomatedSoftwareDistribution {
  async PostSoftwareReleaseByPID(input: any): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/metadata/pidrelease';
    const data: any = await axios.post(targetURL, input, header);
    return data.data;
  }

  async GetK9Agreement(): Promise<any> {
    const header = c_module.GetHeader();
    const targetURL: string = baseURL + '/compliance/k9';
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
