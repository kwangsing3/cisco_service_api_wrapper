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
    //#region
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
    //#region
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
    //#region
    CaseGetCaseSummary: Case_entry.GetCaseSummary,
    CaseGetCaseDetails: Case_entry.GetCaseDetails,
    CaseGetCaseByContractID: Case_entry.GetCaseByContractID,
    CaseGetCaseByUserID: Case_entry.GetCaseByUserID,
    //#endregion
    //#region
    EoxGetCaseSummary: Eox_entry.GetCaseSummary,
    EoxGetEoXbyProductIDs: Eox_entry.GetEoXbyProductIDs,
    EoxGetEoXBySerialNumbers: Eox_entry.GetEoXBySerialNumbers,
    EoxGetEoXbySoftwareReleaseStrings: Eox_entry.GetEoXbySoftwareReleaseStrings,
    //#endregion

    //#region
    ProductInformationGetInformationbySerialNumber:
      ProductInformation_entry.GetInformationbySerialNumber,
    ProductInformationGetInformationbyProductIdentifier:
      ProductInformation_entry.GetInformationbyProductIdentifier,
    ProductInformationGetMDFbyProductId:
      ProductInformation_entry.GetMDFbyProductId,
    //#endregion
    //#region
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
    //#region
    ServiceOrderReturnGETRMADetailsbyRMANumber:
      ServiceOrderReturn_entry.GETRMADetailsbyRMANumber,
    ServiceOrderReturnGETRMAsbyUserID: ServiceOrderReturn_entry.GETRMAsbyUserID,
    //#endregion
    //#region
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

    export function PostSoftwareReleaseByImage() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function GetK9Agreement() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function GetEULAAgreement() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function PostK9Agreement() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function PostEULAAgreement() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function PostDownloadVariant() {
      return Validator.AutomatedSoftwareDistribution();
    }
    export function PostSoftwareStatusVariant() {
      return Validator.AutomatedSoftwareDistribution();
    }
  }
  /**
   *
   */
  export namespace Bug {
    export function GetBugDetailsbyBugIDs() {
      return Validator.BugGetBugDetailsbyBugIDs();
    }
    export function GetBugsbyBaseProductID() {
      return Validator.BugGetBugsbyBaseProductID();
    }
    export function GetBugsbyBaseProductIDandSoftwareReleases() {
      return Validator.BugGetBugsbyBaseProductIDandSoftwareReleases();
    }
    export function GetSearchforBugsbyKeyword() {
      return Validator.BugGetSearchforBugsbyKeyword();
    }
    export function GetSearchBugsbyProductSeriesAndAffectedSoftware() {
      return Validator.BugGetSearchBugsbyProductSeriesAndAffectedSoftware();
    }
    export function GetSearchBugsbyProductSeriesAndFixedInSoftware() {
      return Validator.BugGetSearchBugsbyProductSeriesAndFixedInSoftware();
    }
    export function GetSearchBugsbyProductNameAndAffectedSoftware() {
      return Validator.BugGetSearchBugsbyProductNameAndAffectedSoftware();
    }
    export function GetSearchBugsbyProductNameAndFixedInSoftware() {
      return Validator.BugGetSearchBugsbyProductNameAndFixedInSoftware();
    }
  }

  /**
   *
   */
  export namespace Case {
    export function GetCaseSummary() {
      return Validator.CaseGetCaseSummary();
    }
    export function GetCaseDetails() {
      return Validator.CaseGetCaseDetails();
    }
    export function GetCaseByContractID() {
      return Validator.CaseGetCaseByContractID();
    }
    export function GetCaseByUserID() {
      return Validator.CaseGetCaseByUserID();
    }
  }

  /**
   *
   */
  export namespace Eox {
    export function GetCaseSummary() {
      return Validator.EoxGetCaseSummary();
    }
    export function GetEoXbyProductIDs() {
      return Validator.EoxGetEoXbyProductIDs();
    }
    export function GetEoXBySerialNumbers() {
      return Validator.EoxGetEoXBySerialNumbers();
    }
    export function GetEoXbySoftwareReleaseStrings() {
      return Validator.EoxGetEoXbySoftwareReleaseStrings();
    }
  }

  /**
   *
   */
  export namespace ProductInformation {
    export function GetInformationbySerialNumber() {
      return Validator.ProductInformationGetInformationbySerialNumber();
    }
    export function GetInformationbyProductIdentifier() {
      return Validator.ProductInformationGetInformationbyProductIdentifier();
    }
    export function GetMDFbyProductId() {
      return Validator.ProductInformationGetMDFbyProductId();
    }
  }

  /**
   *
   */
  export namespace SerialNumberToInformation {
    export function GetCoverageStatusbySerialNumber() {
      return Validator.SerialNumberToInformationGetCoverageStatusbySerialNumber();
    }
    export function GetCoverageSummarybyInstanceNumber() {
      return Validator.SerialNumberToInformationGetCoverageSummarybyInstanceNumber();
    }
    export function GetCoverageSummarybySerialNumber() {
      return Validator.SerialNumberToInformationGetCoverageSummarybySerialNumber();
    }
    export function GetOrderableProductIdentifierbySerialNumber() {
      return Validator.SerialNumberToInformationGetOrderableProductIdentifierbySerialNumber();
    }
    export function GetOwnerCoverageStatusbySerialNumbers() {
      return Validator.SerialNumberToInformationGetOwnerCoverageStatusbySerialNumbers();
    }
  }

  /**
   *
   */
  export namespace ServiceOrderReturn {
    export function GETRMADetailsbyRMANumber() {
      return Validator.ServiceOrderReturnGETRMADetailsbyRMANumber();
    }
    export function GETRMAsbyUserID() {
      return Validator.ServiceOrderReturnGETRMAsbyUserID();
    }
  }

  /**
   *
   */
  export namespace SoftwareSuggestion {
    export function GetCompatibleAndSuggestedSoftwareReleasesbyMDFID() {
      return Validator.SoftwareSuggestionGetCompatibleAndSuggestedSoftwareReleasesbyMDFID();
    }
    export function GetCompatibleSoftwareReleasesbyProductIDs() {
      return Validator.SoftwareSuggestionGetCompatibleSoftwareReleasesbyProductIDs();
    }
    export function GetSuggestedReleasesAndImagesbyMDFIDs() {
      return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyMDFIDs();
    }
    export function GetSuggestedReleasesAndImagesbyProductIDs() {
      return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyProductIDs();
    }
    export function GetSuggestedReleasesbyMDFIDs() {
      return Validator.SoftwareSuggestionGetSuggestedReleasesbyMDFIDs();
    }
    export function GetSuggestedReleasesbyProductIDs() {
      return Validator.SoftwareSuggestionGetSuggestedReleasesbyProductIDs();
    }
  }
}
