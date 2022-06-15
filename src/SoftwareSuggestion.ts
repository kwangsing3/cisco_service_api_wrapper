/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 */
const axios = require('axios');
import * as c_module from './common';

const baseURL = 'https://api.cisco.com/software/suggestion/v2';

export class SoftwareSuggestion {
  async GetSuggestedReleasesAndImagesbyProductIDs(
    productIds: string,
    pageIndex?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/suggestions/software/productIds/{productIds}';
    const arr = c_module.GetParams(
      this.GetSuggestedReleasesAndImagesbyProductIDs
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      productIds: productIds,
      pageIndex: pageIndex,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSuggestedReleasesbyProductIDs(
    productIds: string,
    pageIndex?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/suggestions/releases/productIds/{productIds}';
    const arr = c_module.GetParams(this.GetSuggestedReleasesbyProductIDs);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      productIds: productIds,
      pageIndex: pageIndex,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetCompatibleSoftwareReleasesbyProductIDs(
    productId: string,
    currentImage?: string,
    currentRelease?: string,
    pageIndex = 1,
    supportedFeatures?: string,
    supportedHardware?: string
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + '/suggestions/compatible/productId/{basePID}';
    const arr = c_module.GetParams(
      this.GetCompatibleSoftwareReleasesbyProductIDs
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      productId: productId,
      currentImage: currentImage,
      currentRelease: currentRelease,
      pageIndex: pageIndex,
      supportedFeatures: supportedFeatures,
      supportedHardware: supportedHardware,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSuggestedReleasesAndImagesbyMDFIDs(
    mdfId: string,
    pageIndex?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/suggestions/software/mdfIds/{mdfIds}';
    const arr = c_module.GetParams(this.GetSuggestedReleasesAndImagesbyMDFIDs);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      mdfId: mdfId,
      pageIndex: pageIndex,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetSuggestedReleasesbyMDFIDs(
    mdfId: string,
    pageIndex?: number
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/suggestions/releases/mdfIds/{mdfIds}';
    const arr = c_module.GetParams(this.GetSuggestedReleasesbyMDFIDs);
    targetURL = c_module.GetReturnString(targetURL, arr, {
      mdfId: mdfId,
      pageIndex: pageIndex,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  async GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(
    mdfId: string,
    currentImage?: string,
    currentRelease?: string,
    pageIndex?: number,
    supportedFeatures?: 'orderdate' | 'status',
    supportedHardware?: string
  ): Promise<any> {
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + '/suggestions/compatible/mdfId/{mdfId}';
    const arr = c_module.GetParams(
      this.GetCompatibleAndSuggestedSoftwareReleasesbyMDFID
    );
    targetURL = c_module.GetReturnString(targetURL, arr, {
      mdfId: mdfId,
      currentImage: currentImage,
      currentRelease: currentRelease,
      pageIndex: pageIndex,
      supportedFeatures: supportedFeatures,
      supportedHardware: supportedHardware,
    });
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
