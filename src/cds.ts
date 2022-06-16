/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 *
 */
import * as AutomatedSoftwareDistribution_module from './AutomatedSoftwareDistribution';
import * as Bug_module from './Bug';
import * as Case from './Case';
import * as Eox from './Eox';
import * as ProductInformation from './ProductInformation';
import * as SerialNumberToInformation from './SerialNumberToInformation';
import * as ServiceOrderReturn from './ServiceOrderReturn';
import * as SoftwareSuggestion from './SoftwareSuggestion';

import * as c_module from './common';
//#region
const AutomatedSoftwareDistribution_entry =
  new AutomatedSoftwareDistribution_module.AutomatedSoftwareDistribution();
const Bug_entry = new Bug_module.Bugs();
const Case_entry = new Case.Case();
const Eox_entry = new Eox.Eox();
const ProductInformation_entry = new ProductInformation.ProductInformation();
const SerialNumberToInformation_entry =
  new SerialNumberToInformation.SerialNumberToInformation();
const ServiceOrderReturn_entry = new ServiceOrderReturn.ServiceOrderReturn();
const SoftwareSuggestion_entry = new SoftwareSuggestion.SoftwareSuggestion();

const Validator = new Proxy(
  {
    //#region AutomatedSoftwareDistribution: 8
    AutomatedSoftwareDistributionPostSoftwareReleaseByPID:
      AutomatedSoftwareDistribution_entry.PostSoftwareReleaseByPID,
    AutomatedSoftwareDistributionPostSoftwareReleaseByImage:
      AutomatedSoftwareDistribution_entry.PostSoftwareReleaseByImage,
    AutomatedSoftwareDistributionGetK9Agreement:
      AutomatedSoftwareDistribution_entry.GetK9Agreement,
    AutomatedSoftwareDistributionGetEULAAgreement:
      AutomatedSoftwareDistribution_entry.GetEULAAgreement,
    AutomatedSoftwareDistributionPostK9Agreement:
      AutomatedSoftwareDistribution_entry.PostK9Agreement,
    AutomatedSoftwareDistributionPostEULAAgreement:
      AutomatedSoftwareDistribution_entry.PostEULAAgreement,
    AutomatedSoftwareDistributionPostDownloadVariant:
      AutomatedSoftwareDistribution_entry.PostDownloadVariant,
    AutomatedSoftwareDistributionPostSoftwareStatusVariant:
      AutomatedSoftwareDistribution_entry.PostSoftwareStatusVariant,
    //#endregion
    //#region Bug: 8
    BugsGetBugDetailsbyBugIDs: Bug_entry.GetBugDetailsbyBugIDs,
    BugsGetBugsbyBaseProductID: Bug_entry.GetBugsbyBaseProductID,
    BugsGetBugsbyBaseProductIDandSoftwareReleases:
      Bug_entry.GetBugsbyBaseProductIDandSoftwareReleases,
    BugsGetSearchforBugsbyKeyword: Bug_entry.GetSearchforBugsbyKeyword,
    BugsGetSearchBugsbyProductSeriesAndAffectedSoftware:
      Bug_entry.GetSearchBugsbyProductSeriesAndAffectedSoftware,
    BugsGetSearchBugsbyProductSeriesAndFixedInSoftware:
      Bug_entry.GetSearchBugsbyProductSeriesAndFixedInSoftware,
    BugsGetSearchBugsbyProductNameAndAffectedSoftware:
      Bug_entry.GetSearchBugsbyProductNameAndAffectedSoftware,
    BugsGetSearchBugsbyProductNameAndFixedInSoftware:
      Bug_entry.GetSearchBugsbyProductNameAndFixedInSoftware,
    //#endregion
    //#region Case: 4
    CaseGetCaseSummary: Case_entry.GetCaseSummary,
    CaseGetCaseDetails: Case_entry.GetCaseDetails,
    CaseGetCaseByContractID: Case_entry.GetCaseByContractID,
    CaseGetCaseByUserID: Case_entry.GetCaseByUserID,
    //#endregion
    //#region Eox: 4
    EoxGetCaseSummary: Eox_entry.GetCaseSummary,
    EoxGetEoXbyProductIDs: Eox_entry.GetEoXbyProductIDs,
    EoxGetEoXBySerialNumbers: Eox_entry.GetEoXBySerialNumbers,
    EoxGetEoXbySoftwareReleaseStrings: Eox_entry.GetEoXbySoftwareReleaseStrings,
    //#endregion

    //#region ProductInformation: 3
    ProductInformationGetInformationbySerialNumber:
      ProductInformation_entry.GetInformationbySerialNumber,
    ProductInformationGetInformationbyProductIdentifier:
      ProductInformation_entry.GetInformationbyProductIdentifier,
    ProductInformationGetMDFbyProductId:
      ProductInformation_entry.GetMDFbyProductId,
    //#endregion
    //#region SerialNumberToInformation: 5
    SerialNumberToInformationGetCoverageStatusbySerialNumber:
      SerialNumberToInformation_entry.GetCoverageStatusbySerialNumber,
    SerialNumberToInformationGetCoverageSummarybyInstanceNumber:
      SerialNumberToInformation_entry.GetCoverageSummarybyInstanceNumber,
    SerialNumberToInformationGetCoverageSummarybySerialNumber:
      SerialNumberToInformation_entry.GetCoverageSummarybySerialNumber,
    SerialNumberToInformationGetOrderableProductIdentifierbySerialNumber:
      SerialNumberToInformation_entry.GetOrderableProductIdentifierbySerialNumber,
    SerialNumberToInformationGetOwnerCoverageStatusbySerialNumber:
      SerialNumberToInformation_entry.GetOwnerCoverageStatusbySerialNumber,
    //#endregion
    //#region ServiceOrderReturn: 2
    ServiceOrderReturnGETRMADetailsbyRMANumber:
      ServiceOrderReturn_entry.GETRMADetailsbyRMANumber,
    ServiceOrderReturnGETRMAsbyUserID: ServiceOrderReturn_entry.GETRMAsbyUserID,
    //#endregion
    //#region SoftwareSuggestion: 6
    SoftwareSuggestionGetCompatibleAndSuggestedSoftwareReleasesbyMDFID:
      SoftwareSuggestion_entry.GetCompatibleAndSuggestedSoftwareReleasesbyMDFID,
    SoftwareSuggestionGetCompatibleSoftwareReleasesbyProductIDs:
      SoftwareSuggestion_entry.GetCompatibleSoftwareReleasesbyProductIDs,
    SoftwareSuggestionGetSuggestedReleasesAndImagesbyMDFIDs:
      SoftwareSuggestion_entry.GetSuggestedReleasesAndImagesbyMDFIDs,
    SoftwareSuggestionGetSuggestedReleasesAndImagesbyProductIDs:
      SoftwareSuggestion_entry.GetSuggestedReleasesAndImagesbyProductIDs,
    SoftwareSuggestionGetSuggestedReleasesbyMDFIDs:
      SoftwareSuggestion_entry.GetSuggestedReleasesbyMDFIDs,
    SoftwareSuggestionGetSuggestedReleasesbyProductIDs:
      SoftwareSuggestion_entry.GetSuggestedReleasesbyProductIDs,
    //#endregion
  },
  {
    get: function (obj: any, props: any) {
      return function (...params: any) {
        if (c_module.GetToken() === '') {
          throw 'Error: non-TOKEN, Call "Init" function at first before calling other functions';
        }
        return obj[props].apply(null, params);
      };
    },
  }
);
//#endregion

//#region  functions definition
/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
export function Init(token: string | undefined) {
  if (token !== '' && token !== undefined) {
    c_module.SetToken(token);
  }
}
/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetToken(): string {
  const result = c_module.GetToken();
  if (result === '') {
    throw new Error(
      'Error: non-TOKEN, Call "Init" function at first before calling other functions'
    );
  }
  return result;
}
/********************
 * Header: Set HTTP header, it's optional, but should have it.
 * @param {string} header object
 * @example
 * {
      'User-Agent': 'npm package-dev',
      Referer: 'Cisco_Data_Service-ts',
  }
 ********************/
export function SetHeader(input: any) {
  c_module.SetHeader(input);
}
//#endregion

// namespace
// https://developer.cisco.com/docs/support-apis/
export namespace CiscoSupportAPI {
  /**
   *
   */
  export namespace AutomatedSoftwareDistribution {
    export function PostSoftwareReleaseByPID(input: {
      pid: string;
      currentReleaseVersion: string;
      outputReleaseVersion: 'Latest' | 'Above' | string;
      pageIndex: string;
      perPage: string;
    }) {
      return Validator.AutomatedSoftwareDistributionPostSoftwareReleaseByPID(
        input
      );
    }

    export function PostSoftwareReleaseByImage(input: {
      pid: string;
      imageNames: string[];
      pageIndex: number;
      perPage: number;
    }) {
      return Validator.AutomatedSoftwareDistributionPostSoftwareReleaseByImage(
        input
      );
    }
    export function GetK9Agreement() {
      return Validator.AutomatedSoftwareDistributionGetK9Agreement();
    }
    export function GetEULAAgreement() {
      return Validator.AutomatedSoftwareDistributionGetEULAAgreement();
    }
    export function PostK9Agreement(input: {
      status: 'Accepted' | 'Declined';
      declineComments: number;
      fileNames: string;
      confirm: 'Confirm_Checked';
      busFunction: 'COMM_OR_CIVIL';
      govMilCountries: 'GOV_OR_MIL';
    }) {
      return Validator.AutomatedSoftwareDistributionPostK9Agreement(input);
    }
    export function PostEULAAgreement(input: {
      status: 'Accepted' | 'Declined';
      declineComments: number;
      fileNames: string;
    }) {
      return Validator.AutomatedSoftwareDistributionPostEULAAgreement(input);
    }
    export function PostDownloadVariant(input: {
      pid: string;
      mdfId: string;
      metadataTransId: string;
      imageGuids: string[1] | string[5];
    }) {
      return Validator.AutomatedSoftwareDistributionPostDownloadVariant(input);
    }
    export function PostSoftwareStatusVariant(input: {
      imageNames: string[1] | string[5];
    }) {
      return Validator.AutomatedSoftwareDistributionPostSoftwareStatusVariant(
        input
      );
    }
  }
  /**
   *
   */
  export namespace Bug {
    export function GetBugDetailsbyBugIDs(bug_ids: string) {
      return Validator.BugGetBugDetailsbyBugIDs(bug_ids);
    }
    export function GetBugsbyBaseProductID(
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
    ) {
      return Validator.BugGetBugsbyBaseProductID(
        base_pid,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetBugsbyBaseProductIDandSoftwareReleases(
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
    ) {
      return Validator.BugGetBugsbyBaseProductIDandSoftwareReleases(
        base_pid,
        software_releases,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetSearchforBugsbyKeyword(
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
    ) {
      return Validator.BugGetSearchforBugsbyKeyword(
        keyword,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetSearchBugsbyProductSeriesAndAffectedSoftware(
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
    ) {
      return Validator.BugGetSearchBugsbyProductSeriesAndAffectedSoftware(
        product_series,
        affected_releases,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetSearchBugsbyProductSeriesAndFixedInSoftware(
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
    ) {
      return Validator.BugGetSearchBugsbyProductSeriesAndFixedInSoftware(
        product_series,
        fixed_in_releases,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetSearchBugsbyProductNameAndAffectedSoftware(
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
    ) {
      return Validator.BugGetSearchBugsbyProductNameAndAffectedSoftware(
        product_name,
        affected_releases,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
    export function GetSearchBugsbyProductNameAndFixedInSoftware(
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
    ) {
      return Validator.BugGetSearchBugsbyProductNameAndFixedInSoftware(
        product_name,
        fixed_in_releases,
        page_index,
        status,
        modified_date,
        severity,
        sort_by
      );
    }
  }

  /**
   *
   */
  export namespace Case {
    export function GetCaseSummary(
      case_ids: string,
      sort_by?: 'UPDATED_DATE' | 'STATUS'
    ) {
      return Validator.CaseGetCaseSummary(case_ids, sort_by);
    }
    export function GetCaseDetails(case_ids: string) {
      return Validator.CaseGetCaseDetails(case_ids);
    }
    export function GetCaseByContractID(
      contract_ids: string,
      date_created_from?: string,
      date_created_to?: string,
      status_flag?: 'O' | 'C',
      sort_by?: 'UPDATED_DATE' | 'STATUS',
      page_index?: number
    ) {
      return Validator.CaseGetCaseByContractID(
        contract_ids,
        date_created_from,
        date_created_to,
        status_flag,
        sort_by,
        page_index
      );
    }
    export function GetCaseByUserID(
      user_ids: string,
      date_created_from?: string,
      date_created_to?: string,
      status_flag?: 'O' | 'C',
      sort_by?: 'UPDATED_DATE' | 'STATUS',
      page_index?: number
    ) {
      return Validator.CaseGetCaseByUserID(
        user_ids,
        date_created_from,
        date_created_to,
        status_flag,
        sort_by,
        page_index
      );
    }
  }

  /**
   *
   */
  export namespace Eox {
    export function GetCaseSummary(
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
    ) {
      return Validator.EoxGetCaseSummary(
        startDate,
        endDate,
        pageIndex,
        eoxAttrib,
        responseencoding
      );
    }
    export function GetEoXbyProductIDs(
      productID: string,
      pageIndex = 1,
      responseencoding?: 'xml' | 'json'
    ) {
      return Validator.EoxGetEoXbyProductIDs(
        productID,
        pageIndex,
        responseencoding
      );
    }
    export function GetEoXBySerialNumbers(
      serialNumber: string,
      pageIndex = 1,
      responseencoding?: 'xml' | 'json'
    ) {
      return Validator.EoxGetEoXBySerialNumbers(
        serialNumber,
        pageIndex,
        responseencoding
      );
    }
    export function GetEoXbySoftwareReleaseStrings(
      input: string,
      pageIndex: number,
      responseencoding?: 'xml' | 'json'
    ) {
      return Validator.EoxGetEoXbySoftwareReleaseStrings(
        input,
        pageIndex,
        responseencoding
      );
    }
  }

  /**
   *
   */
  export namespace ProductInformation {
    export function GetInformationbySerialNumber(
      serial_numbers: string,
      page_index?: number
    ) {
      return Validator.ProductInformationGetInformationbySerialNumber(
        serial_numbers,
        page_index
      );
    }
    export function GetInformationbyProductIdentifier(
      product_ids: string,
      page_index?: number
    ) {
      return Validator.ProductInformationGetInformationbyProductIdentifier(
        product_ids,
        page_index
      );
    }
    export function GetMDFbyProductId(
      product_ids: string,
      page_index?: number
    ) {
      return Validator.ProductInformationGetMDFbyProductId(
        product_ids,
        page_index
      );
    }
  }

  /**
   *
   */
  export namespace SerialNumberToInformation {
    export function GetCoverageStatusbySerialNumber(sr_no: string) {
      return Validator.SerialNumberToInformationGetCoverageStatusbySerialNumber(
        sr_no
      );
    }
    export function GetCoverageSummarybySerialNumber(
      sr_no: string,
      page_index = 1
    ) {
      return Validator.SerialNumberToInformationGetCoverageSummarybySerialNumber(
        sr_no,
        page_index
      );
    }
    export function GetCoverageSummarybyInstanceNumber(
      instance_no: string,
      page_index = 1
    ) {
      return Validator.SerialNumberToInformationGetCoverageSummarybyInstanceNumber(
        instance_no,
        page_index
      );
    }
    export function GetOrderableProductIdentifierbySerialNumber(
      sr_no: string
    ): Promise<any> {
      return Validator.SerialNumberToInformationGetOrderableProductIdentifierbySerialNumber(
        sr_no
      );
    }
    export function GetOwnerCoverageStatusbySerialNumbers(
      sr_no: string
    ): Promise<any> {
      return Validator.SerialNumberToInformationGetOwnerCoverageStatusbySerialNumbers(
        sr_no
      );
    }
  }

  /**
   *
   */
  export namespace ServiceOrderReturn {
    export function GETRMADetailsbyRMANumber(rma_numbers: number) {
      return Validator.ServiceOrderReturnGETRMADetailsbyRMANumber(rma_numbers);
    }
    export function GETRMAsbyUserID(
      user_ids: string,
      fromDate?: string,
      toDate?: string,
      status?: 'open' | 'booked' | 'hold' | 'closed' | 'cancelled',
      sortBy?: 'orderdate' | 'status'
    ) {
      return Validator.ServiceOrderReturnGETRMAsbyUserID(
        user_ids,
        fromDate,
        toDate,
        status,
        sortBy
      );
    }
  }

  /**
   *
   */
  export namespace SoftwareSuggestion {
    export function GetSuggestedReleasesAndImagesbyProductIDs(
      productIds: string,
      pageIndex?: number
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyProductIDs(
        productIds,
        pageIndex
      );
    }
    export function GetSuggestedReleasesbyProductIDs(
      productIds: string,
      pageIndex?: number
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetSuggestedReleasesbyProductIDs(
        productIds,
        pageIndex
      );
    }
    export function GetCompatibleSoftwareReleasesbyProductIDs(
      productId: string,
      currentImage?: string,
      currentRelease?: string,
      pageIndex = 1,
      supportedFeatures?: string,
      supportedHardware?: string
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetCompatibleSoftwareReleasesbyProductIDs(
        productId,
        currentImage,
        currentRelease,
        pageIndex,
        supportedFeatures,
        supportedHardware
      );
    }
    export function GetSuggestedReleasesAndImagesbyMDFIDs(
      mdfId: string,
      pageIndex?: number
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyMDFIDs(
        mdfId,
        pageIndex
      );
    }
    export function GetSuggestedReleasesbyMDFIDs(
      mdfId: string,
      pageIndex?: number
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetSuggestedReleasesbyMDFIDs(
        mdfId,
        pageIndex
      );
    }
    export function GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(
      mdfId: string,
      currentImage?: string,
      currentRelease?: string,
      pageIndex?: number,
      supportedFeatures?: 'orderdate' | 'status',
      supportedHardware?: string
    ): Promise<any> {
      return Validator.SoftwareSuggestionGetCompatibleAndSuggestedSoftwareReleasesbyMDFID(
        mdfId,
        currentImage,
        currentRelease,
        pageIndex,
        supportedFeatures,
        supportedHardware
      );
    }
  }
}
