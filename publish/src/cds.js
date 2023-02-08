"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiscoSupportAPI = exports.SetHeader = exports.GetToken = exports.Init = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 *
 */
const AutomatedSoftwareDistribution_module = require("./AutomatedSoftwareDistribution");
const Bug_module = require("./Bug");
const Case = require("./Case");
const Eox = require("./Eox");
const ProductInformation = require("./ProductInformation");
const SerialNumberToInformation = require("./SerialNumberToInformation");
const ServiceOrderReturn = require("./ServiceOrderReturn");
const SoftwareSuggestion = require("./SoftwareSuggestion");
const c_module = require("./common");
//#region
const AutomatedSoftwareDistribution_entry = new AutomatedSoftwareDistribution_module.AutomatedSoftwareDistribution();
const Bug_entry = new Bug_module.Bugs();
const Case_entry = new Case.Case();
const Eox_entry = new Eox.Eox();
const ProductInformation_entry = new ProductInformation.ProductInformation();
const SerialNumberToInformation_entry = new SerialNumberToInformation.SerialNumberToInformation();
const ServiceOrderReturn_entry = new ServiceOrderReturn.ServiceOrderReturn();
const SoftwareSuggestion_entry = new SoftwareSuggestion.SoftwareSuggestion();
const Validator = new Proxy({
    //#region AutomatedSoftwareDistribution: 8
    AutomatedSoftwareDistributionPostSoftwareReleaseByPID: AutomatedSoftwareDistribution_entry.PostSoftwareReleaseByPID,
    AutomatedSoftwareDistributionPostSoftwareReleaseByImage: AutomatedSoftwareDistribution_entry.PostSoftwareReleaseByImage,
    AutomatedSoftwareDistributionGetK9Agreement: AutomatedSoftwareDistribution_entry.GetK9Agreement,
    AutomatedSoftwareDistributionGetEULAAgreement: AutomatedSoftwareDistribution_entry.GetEULAAgreement,
    AutomatedSoftwareDistributionPostK9Agreement: AutomatedSoftwareDistribution_entry.PostK9Agreement,
    AutomatedSoftwareDistributionPostEULAAgreement: AutomatedSoftwareDistribution_entry.PostEULAAgreement,
    AutomatedSoftwareDistributionPostDownloadVariant: AutomatedSoftwareDistribution_entry.PostDownloadVariant,
    AutomatedSoftwareDistributionPostSoftwareStatusVariant: AutomatedSoftwareDistribution_entry.PostSoftwareStatusVariant,
    //#endregion
    //#region Bug: 8
    BugsGetBugDetailsbyBugIDs: Bug_entry.GetBugDetailsbyBugIDs,
    BugsGetBugsbyBaseProductID: Bug_entry.GetBugsbyBaseProductID,
    BugsGetBugsbyBaseProductIDandSoftwareReleases: Bug_entry.GetBugsbyBaseProductIDandSoftwareReleases,
    BugsGetSearchforBugsbyKeyword: Bug_entry.GetSearchforBugsbyKeyword,
    BugsGetSearchBugsbyProductSeriesAndAffectedSoftware: Bug_entry.GetSearchBugsbyProductSeriesAndAffectedSoftware,
    BugsGetSearchBugsbyProductSeriesAndFixedInSoftware: Bug_entry.GetSearchBugsbyProductSeriesAndFixedInSoftware,
    BugsGetSearchBugsbyProductNameAndAffectedSoftware: Bug_entry.GetSearchBugsbyProductNameAndAffectedSoftware,
    BugsGetSearchBugsbyProductNameAndFixedInSoftware: Bug_entry.GetSearchBugsbyProductNameAndFixedInSoftware,
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
    ProductInformationGetInformationbySerialNumber: ProductInformation_entry.GetInformationbySerialNumber,
    ProductInformationGetInformationbyProductIdentifier: ProductInformation_entry.GetInformationbyProductIdentifier,
    ProductInformationGetMDFbyProductId: ProductInformation_entry.GetMDFbyProductId,
    //#endregion
    //#region SerialNumberToInformation: 5
    SerialNumberToInformationGetCoverageStatusbySerialNumber: SerialNumberToInformation_entry.GetCoverageStatusbySerialNumber,
    SerialNumberToInformationGetCoverageSummarybyInstanceNumber: SerialNumberToInformation_entry.GetCoverageSummarybyInstanceNumber,
    SerialNumberToInformationGetCoverageSummarybySerialNumber: SerialNumberToInformation_entry.GetCoverageSummarybySerialNumber,
    SerialNumberToInformationGetOrderableProductIdentifierbySerialNumber: SerialNumberToInformation_entry.GetOrderableProductIdentifierbySerialNumber,
    SerialNumberToInformationGetOwnerCoverageStatusbySerialNumber: SerialNumberToInformation_entry.GetOwnerCoverageStatusbySerialNumber,
    //#endregion
    //#region ServiceOrderReturn: 2
    ServiceOrderReturnGETRMADetailsbyRMANumber: ServiceOrderReturn_entry.GETRMADetailsbyRMANumber,
    ServiceOrderReturnGETRMAsbyUserID: ServiceOrderReturn_entry.GETRMAsbyUserID,
    //#endregion
    //#region SoftwareSuggestion: 6
    SoftwareSuggestionGetCompatibleAndSuggestedSoftwareReleasesbyMDFID: SoftwareSuggestion_entry.GetCompatibleAndSuggestedSoftwareReleasesbyMDFID,
    SoftwareSuggestionGetCompatibleSoftwareReleasesbyProductIDs: SoftwareSuggestion_entry.GetCompatibleSoftwareReleasesbyProductIDs,
    SoftwareSuggestionGetSuggestedReleasesAndImagesbyMDFIDs: SoftwareSuggestion_entry.GetSuggestedReleasesAndImagesbyMDFIDs,
    SoftwareSuggestionGetSuggestedReleasesAndImagesbyProductIDs: SoftwareSuggestion_entry.GetSuggestedReleasesAndImagesbyProductIDs,
    SoftwareSuggestionGetSuggestedReleasesbyMDFIDs: SoftwareSuggestion_entry.GetSuggestedReleasesbyMDFIDs,
    SoftwareSuggestionGetSuggestedReleasesbyProductIDs: SoftwareSuggestion_entry.GetSuggestedReleasesbyProductIDs,
    //#endregion
}, {
    get: function (obj, props) {
        return function (...params) {
            if (c_module.GetToken() === '') {
                throw 'Error: non-TOKEN, Call "Init" function at first before calling other functions';
            }
            return obj[props].apply(null, params);
        };
    },
});
//#endregion
//#region  functions definition
/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
async function Init(input) {
    //
    const axios = require('axios');
    const qs = require('qs');
    const data = qs.stringify({
        grant_type: 'client_credentials',
        client_id: input.client_id,
        client_secret: input.client_serect,
    });
    const config = {
        method: 'post',
        url: 'https://cloudsso.cisco.com/as/token.oauth2',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
    };
    const raw = await axios(config);
    const rawdata = raw['data'];
    c_module.SetToken(`${rawdata['token_type']} ${rawdata['access_token']}`);
}
exports.Init = Init;
/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetToken() {
    const result = c_module.GetToken();
    if (result === '') {
        throw new Error('Error: non-TOKEN, Call "Init" function at first before calling other functions');
    }
    return result;
}
exports.GetToken = GetToken;
/********************
 * Header: Set HTTP header, it's optional, but should have it.
 * @param {string} header object
 * @example
 * {
      'User-Agent': 'npm package-dev',
      Referer: 'cisco_service_api_wrapper-ts',
  }
 ********************/
function SetHeader(input) {
    c_module.SetHeader(input);
}
exports.SetHeader = SetHeader;
//#endregion
// namespace
// https://developer.cisco.com/docs/support-apis/
var CiscoSupportAPI;
(function (CiscoSupportAPI) {
    /**
     * Cisco Automated Software Distribution service provides software information and download URLs to assist you in upgrading your device/application to the latest version.
     * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution
     */
    let AutomatedSoftwareDistribution;
    (function (AutomatedSoftwareDistribution) {
        /**
         * Returns information on the software release for the device specified by its PID and Release.
         * @param input
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-release-by-pid-and-releases
         * @returns
         */
        function PostSoftwareReleaseByPID(input) {
            return Validator.AutomatedSoftwareDistributionPostSoftwareReleaseByPID(input);
        }
        AutomatedSoftwareDistribution.PostSoftwareReleaseByPID = PostSoftwareReleaseByPID;
        /**
         * Returns information on the software release for the device specified by its PID and Image Names.
         * @param input
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-release-by-pid-and-image
         * @returns
         */
        function PostSoftwareReleaseByImage(input) {
            return Validator.AutomatedSoftwareDistributionPostSoftwareReleaseByImage(input);
        }
        AutomatedSoftwareDistribution.PostSoftwareReleaseByImage = PostSoftwareReleaseByImage;
        /**
         * Returns the user's K9 agreement and can also be used for pre-registration of legal form during product setup.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/get-k9-agreement
         * @returns
         */
        function GetK9Agreement() {
            return Validator.AutomatedSoftwareDistributionGetK9Agreement();
        }
        AutomatedSoftwareDistribution.GetK9Agreement = GetK9Agreement;
        /**
         * Returns the user's EULA agreement and can also be used for pre-registration of legal form during product setup.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/get-eula-agreement
         * @returns
         */
        function GetEULAAgreement() {
            return Validator.AutomatedSoftwareDistributionGetEULAAgreement();
        }
        AutomatedSoftwareDistribution.GetEULAAgreement = GetEULAAgreement;
        /**
         * Updates the user's K9 agreement for the specified download session ID and software attributes.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/post-k9-agreement
         * @param input
         * @returns
         */
        function PostK9Agreement(input) {
            return Validator.AutomatedSoftwareDistributionPostK9Agreement(input);
        }
        AutomatedSoftwareDistribution.PostK9Agreement = PostK9Agreement;
        /**
         * Updates the user's EULA agreement for the specified download session ID and software attributes
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/post-eula-agreement
         * @param input
         * @returns
         */
        function PostEULAAgreement(input) {
            return Validator.AutomatedSoftwareDistributionPostEULAAgreement(input);
        }
        AutomatedSoftwareDistribution.PostEULAAgreement = PostEULAAgreement;
        /**
         * Providing download URLs for the software based on PID and Image GUIDs. Download URLs, and associated provided tokens, are to download the software from servers for provided GUIDs. There can be maximum of 5 Image GUIDs and minimum of 1 GUID provided by request object.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/download-variant
         * @param input
         * @returns
         */
        function PostDownloadVariant(input) {
            return Validator.AutomatedSoftwareDistributionPostDownloadVariant(input);
        }
        AutomatedSoftwareDistribution.PostDownloadVariant = PostDownloadVariant;
        /**
         * Returns software status for given software image names.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-status-variant
         * @param input
         * @returns
         */
        function PostSoftwareStatusVariant(input) {
            return Validator.AutomatedSoftwareDistributionPostSoftwareStatusVariant(input);
        }
        AutomatedSoftwareDistribution.PostSoftwareStatusVariant = PostSoftwareStatusVariant;
    })(AutomatedSoftwareDistribution = CiscoSupportAPI.AutomatedSoftwareDistribution || (CiscoSupportAPI.AutomatedSoftwareDistribution = {}));
    /**
     *Cisco defects (or bugs) are made visible to customers and partners through the use of the Bug Search Tool (BST) application.
     The objective of the Cisco Bug API is to provide an entry point into the Bug Search Tool for customers and partners to view bug details
      and perform bug searches while integrating the search results into their own interfaces and applications.
     */
    let Bug;
    (function (Bug) {
        /**
         * Returns detailed information for the specified bug ID or IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/get-bug-details-by-bug-ids
         * @param bug_ids
         * @returns
         */
        function GetBugDetailsbyBugIDs(bug_ids) {
            return Validator.BugsGetBugDetailsbyBugIDs(bug_ids);
        }
        Bug.GetBugDetailsbyBugIDs = GetBugDetailsbyBugIDs;
        /**
         * Returns detailed information for the bugs associated with the specified base product ID.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/get-bugs-by-base-product-id
         * @param base_pid
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetBugsbyBaseProductID(base_pid, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetBugsbyBaseProductID(base_pid, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetBugsbyBaseProductID = GetBugsbyBaseProductID;
        /**
         * Returns detailed information for the bugs associated with the specified base product ID and software release or releases.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/get-bugs-by-base-product-id-and-software-releases
         * @param base_pid
         * @param software_releases
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetBugsbyBaseProductIDandSoftwareReleases(base_pid, software_releases, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetBugsbyBaseProductIDandSoftwareReleases(base_pid, software_releases, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetBugsbyBaseProductIDandSoftwareReleases = GetBugsbyBaseProductIDandSoftwareReleases;
        /**
         * Returns detailed information for the bugs associated with the specified keyword.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/search-for-bugs-by-keyword
         * @param keyword
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetSearchforBugsbyKeyword(keyword, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetSearchforBugsbyKeyword(keyword, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetSearchforBugsbyKeyword = GetSearchforBugsbyKeyword;
        /**
         * Returns detailed information for the bugs associated with the specified hardware product series and affected software release or releases.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/search-bugs-by-product-series-and-affected-software-release
         * @param product_series
         * @param affected_releases
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetSearchBugsbyProductSeriesAndAffectedSoftware(product_series, affected_releases, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetSearchBugsbyProductSeriesAndAffectedSoftware(product_series, affected_releases, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetSearchBugsbyProductSeriesAndAffectedSoftware = GetSearchBugsbyProductSeriesAndAffectedSoftware;
        /**
         * Returns detailed information for the bugs associated with the specified hardware product series and software release or releases in which the bug was fixed.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/search-bugs-by-product-series-and-fixed-in-software-release
         * @param product_series
         * @param fixed_in_releases
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetSearchBugsbyProductSeriesAndFixedInSoftware(product_series, fixed_in_releases, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetSearchBugsbyProductSeriesAndFixedInSoftware(product_series, fixed_in_releases, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetSearchBugsbyProductSeriesAndFixedInSoftware = GetSearchBugsbyProductSeriesAndFixedInSoftware;
        /**
         * Returns detailed information for the bugs associated with the specified product name and affected software release or releases.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/search-bugs-by-product-name-and-affected-software-release
         * @param product_name
         * @param affected_releases
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetSearchBugsbyProductNameAndAffectedSoftware(product_name, affected_releases, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetSearchBugsbyProductNameAndAffectedSoftware(product_name, affected_releases, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetSearchBugsbyProductNameAndAffectedSoftware = GetSearchBugsbyProductNameAndAffectedSoftware;
        /**
         * Returns detailed information for the bugs associated with the specified product name and software release or releases in which the bug was fixed.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/search-bugs-by-product-name-and-fixed-in-software-release
         * @param product_name
         * @param fixed_in_releases
         * @param page_index
         * @param status
         * @param modified_date
         * @param severity
         * @param sort_by
         * @returns
         */
        function GetSearchBugsbyProductNameAndFixedInSoftware(product_name, fixed_in_releases, page_index, status, modified_date, severity, sort_by) {
            return Validator.BugsGetSearchBugsbyProductNameAndFixedInSoftware(product_name, fixed_in_releases, page_index, status, modified_date, severity, sort_by);
        }
        Bug.GetSearchBugsbyProductNameAndFixedInSoftware = GetSearchBugsbyProductNameAndFixedInSoftware;
    })(Bug = CiscoSupportAPI.Bug || (CiscoSupportAPI.Bug = {}));
    /**
     * The Cisco Support Case API v3 provides a powerful, convenient, and simple way to interact with the Cisco Support Case Manager tool and aims to improve the partner and customer experience by enabling you to access case information instantly, programmatically, and in bulk.
     */
    let Case;
    (function (Case) {
        /**
         * Returns brief information for the specified case or cases.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-case-summary
         * @param case_ids
         * @param sort_by
         * @returns
         */
        function GetCaseSummary(case_ids, sort_by) {
            return Validator.CaseGetCaseSummary(case_ids, sort_by);
        }
        Case.GetCaseSummary = GetCaseSummary;
        /**
         * Returns detailed information for the specified case.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-case-details
         * @param case_ids
         * @returns
         */
        function GetCaseDetails(case_ids) {
            return Validator.CaseGetCaseDetails(case_ids);
        }
        Case.GetCaseDetails = GetCaseDetails;
        /**
         * Returns summary information for cases associated with the specified contract or contracts.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-cases-by-contract-id
         * @param contract_ids
         * @param date_created_from
         * @param date_created_to
         * @param status_flag
         * @param sort_by
         * @param page_index
         * @returns
         */
        function GetCaseByContractID(contract_ids, date_created_from, date_created_to, status_flag, sort_by, page_index) {
            return Validator.CaseGetCaseByContractID(contract_ids, date_created_from, date_created_to, status_flag, sort_by, page_index);
        }
        Case.GetCaseByContractID = GetCaseByContractID;
        /**
         * Returns summary information for cases associated with the specified user or users.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-cases-by-user-id
         * @param user_ids
         * @param date_created_from
         * @param date_created_to
         * @param status_flag
         * @param sort_by
         * @param page_index
         * @returns
         */
        function GetCaseByUserID(user_ids, date_created_from, date_created_to, status_flag, sort_by, page_index) {
            return Validator.CaseGetCaseByUserID(user_ids, date_created_from, date_created_to, status_flag, sort_by, page_index);
        }
        Case.GetCaseByUserID = GetCaseByUserID;
    })(Case = CiscoSupportAPI.Case || (CiscoSupportAPI.Case = {}));
    /**
     * The Cisco EoX API provides access to Cisco End of Life product data. Using the EoX Service API, customers and partners can request Cisco EoX product information for both hardware and software using a variety of input mechanisms. For more information on Cisco EoX products and the EoX lifecycle
     */
    let Eox;
    (function (Eox) {
        /**
         * Returns all active and inactive EoX records for all products with the specified eoxAttrib value within the startDate and endDate values, inclusive. If you do not specify an eoxAttrib value, this method returns records with an updated time stamp within the specified date range.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-dates
         * @param startDate
         * @param endDate
         * @param pageIndex
         * @param eoxAttrib
         * @param responseencoding
         * @returns
         */
        function GetCaseSummary(startDate, endDate, pageIndex = 1, eoxAttrib, responseencoding) {
            return Validator.EoxGetCaseSummary(startDate, endDate, pageIndex, eoxAttrib, responseencoding);
        }
        Eox.GetCaseSummary = GetCaseSummary;
        /**
         * Returns one or more EOX records for the product or products with the specified product ID (PID) or product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-product-ids
         * @param productID
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXbyProductIDs(productID, pageIndex = 1, responseencoding) {
            return Validator.EoxGetEoXbyProductIDs(productID, pageIndex, responseencoding);
        }
        Eox.GetEoXbyProductIDs = GetEoXbyProductIDs;
        /**
         * Returns the EoX record for products with the specified serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-serial-numbers
         * @param serialNumber
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXBySerialNumbers(serialNumber, pageIndex = 1, responseencoding) {
            return Validator.EoxGetEoXBySerialNumbers(serialNumber, pageIndex, responseencoding);
        }
        Eox.GetEoXBySerialNumbers = GetEoXBySerialNumbers;
        /**
         * Returns the EoX record for products associated with the specified software release and (optionally) the specified operating system.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-software-release-strings
         * @param input
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXbySoftwareReleaseStrings(input, pageIndex, responseencoding) {
            return Validator.EoxGetEoXbySoftwareReleaseStrings(input, pageIndex, responseencoding);
        }
        Eox.GetEoXbySoftwareReleaseStrings = GetEoXbySoftwareReleaseStrings;
    })(Eox = CiscoSupportAPI.Eox || (CiscoSupportAPI.Eox = {}));
    /**
     * The Cisco Product Information API removes barriers to enterprise automation and can help end users shorten sales cycles and reduce operating expenses.
     */
    let ProductInformation;
    (function (ProductInformation) {
        /**
         * Returns product information associated with the specified serial number or numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-information-by-serial-numbers
         * @param serial_numbers
         * @param page_index
         * @returns
         */
        function GetInformationbySerialNumber(serial_numbers, page_index) {
            return Validator.ProductInformationGetInformationbySerialNumber(serial_numbers, page_index);
        }
        ProductInformation.GetInformationbySerialNumber = GetInformationbySerialNumber;
        /**
         * Returns product information associated with the specified product identifier or identifiers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-information-by-product-identifiers
         * @param product_ids
         * @param page_index
         * @returns
         */
        function GetInformationbyProductIdentifier(product_ids, page_index) {
            return Validator.ProductInformationGetInformationbyProductIdentifier(product_ids, page_index);
        }
        ProductInformation.GetInformationbyProductIdentifier = GetInformationbyProductIdentifier;
        /**
         * Returns metadata framework (MDF) identifiers associated with the specified product identifier or identifiers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-mdf-information-by-product-ids
         * @param product_ids
         * @param page_index
         * @returns
         */
        function GetMDFbyProductId(product_ids, page_index) {
            return Validator.ProductInformationGetMDFbyProductId(product_ids, page_index);
        }
        ProductInformation.GetMDFbyProductId = GetMDFbyProductId;
    })(ProductInformation = CiscoSupportAPI.ProductInformation || (CiscoSupportAPI.ProductInformation = {}));
    /**
     * Cisco’s customers and partners today use Cisco hosted web applications to gather product information using serial numbers for products either already installed at a customer site or being considered for new purchases.
     */
    let SerialNumberToInformation;
    (function (SerialNumberToInformation) {
        /**
         * Returns coverage status for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-status-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetCoverageStatusbySerialNumber(sr_no) {
            return Validator.SerialNumberToInformationGetCoverageStatusbySerialNumber(sr_no);
        }
        SerialNumberToInformation.GetCoverageStatusbySerialNumber = GetCoverageStatusbySerialNumber;
        /**
         * Returns coverage status, warranty, and product identifier details for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-summary-by-serial-numbers
         * @param sr_no
         * @param page_index
         * @returns
         */
        function GetCoverageSummarybySerialNumber(sr_no, page_index = 1) {
            return Validator.SerialNumberToInformationGetCoverageSummarybySerialNumber(sr_no, page_index);
        }
        SerialNumberToInformation.GetCoverageSummarybySerialNumber = GetCoverageSummarybySerialNumber;
        /**
         * Returns coverage status, warranty, and product identifier details for a set of instance numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-summary-by-instance-numbers
         * @param instance_no
         * @param page_index
         * @returns
         */
        function GetCoverageSummarybyInstanceNumber(instance_no, page_index = 1) {
            return Validator.SerialNumberToInformationGetCoverageSummarybyInstanceNumber(instance_no, page_index);
        }
        SerialNumberToInformation.GetCoverageSummarybyInstanceNumber = GetCoverageSummarybyInstanceNumber;
        /**
         * Returns the orderable PID for the specified device serial number.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-orderable-product-identifiers-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetOrderableProductIdentifierbySerialNumber(sr_no) {
            return Validator.SerialNumberToInformationGetOrderableProductIdentifierbySerialNumber(sr_no);
        }
        SerialNumberToInformation.GetOrderableProductIdentifierbySerialNumber = GetOrderableProductIdentifierbySerialNumber;
        /**
         * Returns owner coverage status information for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-owner-coverage-status-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetOwnerCoverageStatusbySerialNumbers(sr_no) {
            return Validator.SerialNumberToInformationGetOwnerCoverageStatusbySerialNumbers(sr_no);
        }
        SerialNumberToInformation.GetOwnerCoverageStatusbySerialNumbers = GetOwnerCoverageStatusbySerialNumbers;
    })(SerialNumberToInformation = CiscoSupportAPI.SerialNumberToInformation || (CiscoSupportAPI.SerialNumberToInformation = {}));
    /**
     * The Cisco Service Order Return (RMA) API provides a powerful, convenient, and simple way to interact with the Cisco RMA service and enables you to access RMA information instantly, programmatically, and in bulk.
     */
    let ServiceOrderReturn;
    (function (ServiceOrderReturn) {
        /**
         * Returns detailed information about the specified RMA.
         * @doc https://developer.cisco.com/docs/support-apis/#!service-order-return-rma/get-rma-details-by-rma-number
         * @param rma_numbers
         * @returns
         */
        function GETRMADetailsbyRMANumber(rma_numbers) {
            return Validator.ServiceOrderReturnGETRMADetailsbyRMANumber(rma_numbers);
        }
        ServiceOrderReturn.GETRMADetailsbyRMANumber = GETRMADetailsbyRMANumber;
        /**
         * Returns a list of RMAs associated with the specified user. By default, the last 30 days of RMAs for a user is returned.
         * @doc https://developer.cisco.com/docs/support-apis/#!service-order-return-rma/get-rmas-by-user-id
         * @param user_ids
         * @param fromDate
         * @param toDate
         * @param status
         * @param sortBy
         * @returns
         */
        function GETRMAsbyUserID(user_ids, fromDate, toDate, status, sortBy) {
            return Validator.ServiceOrderReturnGETRMAsbyUserID(user_ids, fromDate, toDate, status, sortBy);
        }
        ServiceOrderReturn.GETRMAsbyUserID = GETRMAsbyUserID;
    })(ServiceOrderReturn = CiscoSupportAPI.ServiceOrderReturn || (CiscoSupportAPI.ServiceOrderReturn = {}));
    /**
     * The process of selecting the appropriate software upgrade path for your environment can be complex. The Cisco Software Suggestions streamline the software selection process by providing the necessary information to assist you in making intelligent choices for upgrading your software.
     */
    let SoftwareSuggestion;
    (function (SoftwareSuggestion) {
        /**
         * Returns a list of Cisco suggested software releases and images for a list of product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-and-images-by-product-ids
         * @param productIds
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesAndImagesbyProductIDs(productIds, pageIndex) {
            return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyProductIDs(productIds, pageIndex);
        }
        SoftwareSuggestion.GetSuggestedReleasesAndImagesbyProductIDs = GetSuggestedReleasesAndImagesbyProductIDs;
        /**
         * Returns a list of Cisco suggested software releases (without images) for a list of product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-by-product-ids-no-images
         * @param productIds
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesbyProductIDs(productIds, pageIndex) {
            return Validator.SoftwareSuggestionGetSuggestedReleasesbyProductIDs(productIds, pageIndex);
        }
        SoftwareSuggestion.GetSuggestedReleasesbyProductIDs = GetSuggestedReleasesbyProductIDs;
        /**
         * Returns compatible and suggested software releases for a product given its product identifier (PID) and specific software attributes.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-compatible-and-suggested-software-releases-by-product-id
         * @param productId
         * @param currentImage
         * @param currentRelease
         * @param pageIndex
         * @param supportedFeatures
         * @param supportedHardware
         * @returns
         */
        function GetCompatibleSoftwareReleasesbyProductIDs(productId, currentImage, currentRelease, pageIndex = 1, supportedFeatures, supportedHardware) {
            return Validator.SoftwareSuggestionGetCompatibleSoftwareReleasesbyProductIDs(productId, currentImage, currentRelease, pageIndex, supportedFeatures, supportedHardware);
        }
        SoftwareSuggestion.GetCompatibleSoftwareReleasesbyProductIDs = GetCompatibleSoftwareReleasesbyProductIDs;
        /**
         * Returns a list of Cisco suggested software releases and images for a list of mdf IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-and-images-by-mdf-ids
         * @param mdfId
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesAndImagesbyMDFIDs(mdfId, pageIndex) {
            return Validator.SoftwareSuggestionGetSuggestedReleasesAndImagesbyMDFIDs(mdfId, pageIndex);
        }
        SoftwareSuggestion.GetSuggestedReleasesAndImagesbyMDFIDs = GetSuggestedReleasesAndImagesbyMDFIDs;
        /**
         * Returns a list of Cisco suggested software releases (without images) for a list of mdf IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-by-mdf-ids-no-images
         * @param mdfId
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesbyMDFIDs(mdfId, pageIndex) {
            return Validator.SoftwareSuggestionGetSuggestedReleasesbyMDFIDs(mdfId, pageIndex);
        }
        SoftwareSuggestion.GetSuggestedReleasesbyMDFIDs = GetSuggestedReleasesbyMDFIDs;
        /**
         * Returns compatible and suggested software releases for a product given its mdf identifier (mdfId) and specific software attributes.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-compatible-and-suggested-software-releases-by-mdf-id
         * @param mdfId
         * @param currentImage
         * @param currentRelease
         * @param pageIndex
         * @param supportedFeatures
         * @param supportedHardware
         * @returns
         */
        function GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(mdfId, currentImage, currentRelease, pageIndex, supportedFeatures, supportedHardware) {
            return Validator.SoftwareSuggestionGetCompatibleAndSuggestedSoftwareReleasesbyMDFID(mdfId, currentImage, currentRelease, pageIndex, supportedFeatures, supportedHardware);
        }
        SoftwareSuggestion.GetCompatibleAndSuggestedSoftwareReleasesbyMDFID = GetCompatibleAndSuggestedSoftwareReleasesbyMDFID;
    })(SoftwareSuggestion = CiscoSupportAPI.SoftwareSuggestion || (CiscoSupportAPI.SoftwareSuggestion = {}));
})(CiscoSupportAPI = exports.CiscoSupportAPI || (exports.CiscoSupportAPI = {}));
//# sourceMappingURL=cds.js.map