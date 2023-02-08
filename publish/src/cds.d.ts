/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
export declare function Init(input: {
    client_id: string;
    client_serect: string;
}): Promise<void>;
/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export declare function GetToken(): string;
/********************
 * Header: Set HTTP header, it's optional, but should have it.
 * @param {string} header object
 * @example
 * {
      'User-Agent': 'npm package-dev',
      Referer: 'cisco_service_api_wrapper-ts',
  }
 ********************/
export declare function SetHeader(input: any): void;
export declare namespace CiscoSupportAPI {
    /**
     * Cisco Automated Software Distribution service provides software information and download URLs to assist you in upgrading your device/application to the latest version.
     * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution
     */
    namespace AutomatedSoftwareDistribution {
        /**
         * Returns information on the software release for the device specified by its PID and Release.
         * @param input
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-release-by-pid-and-releases
         * @returns
         */
        function PostSoftwareReleaseByPID(input: {
            pid: string;
            currentReleaseVersion: string;
            outputReleaseVersion: 'Latest' | 'Above' | string;
            pageIndex: string;
            perPage: string;
        }): any;
        /**
         * Returns information on the software release for the device specified by its PID and Image Names.
         * @param input
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-release-by-pid-and-image
         * @returns
         */
        function PostSoftwareReleaseByImage(input: {
            pid: string;
            imageNames: string[];
            pageIndex: number;
            perPage: number;
        }): any;
        /**
         * Returns the user's K9 agreement and can also be used for pre-registration of legal form during product setup.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/get-k9-agreement
         * @returns
         */
        function GetK9Agreement(): any;
        /**
         * Returns the user's EULA agreement and can also be used for pre-registration of legal form during product setup.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/get-eula-agreement
         * @returns
         */
        function GetEULAAgreement(): any;
        /**
         * Updates the user's K9 agreement for the specified download session ID and software attributes.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/post-k9-agreement
         * @param input
         * @returns
         */
        function PostK9Agreement(input: {
            status: 'Accepted' | 'Declined';
            declineComments: number;
            fileNames: string;
            confirm: 'Confirm_Checked';
            busFunction: 'COMM_OR_CIVIL';
            govMilCountries: 'GOV_OR_MIL';
        }): any;
        /**
         * Updates the user's EULA agreement for the specified download session ID and software attributes
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/post-eula-agreement
         * @param input
         * @returns
         */
        function PostEULAAgreement(input: {
            status: 'Accepted' | 'Declined';
            declineComments: number;
            fileNames: string;
        }): any;
        /**
         * Providing download URLs for the software based on PID and Image GUIDs. Download URLs, and associated provided tokens, are to download the software from servers for provided GUIDs. There can be maximum of 5 Image GUIDs and minimum of 1 GUID provided by request object.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/download-variant
         * @param input
         * @returns
         */
        function PostDownloadVariant(input: {
            pid: string;
            mdfId: string;
            metadataTransId: string;
            imageGuids: string[1] | string[5];
        }): any;
        /**
         * Returns software status for given software image names.
         * @doc https://developer.cisco.com/docs/support-apis/#!automated-software-distribution/software-status-variant
         * @param input
         * @returns
         */
        function PostSoftwareStatusVariant(input: {
            imageNames: string[1] | string[5];
        }): any;
    }
    /**
     *Cisco defects (or bugs) are made visible to customers and partners through the use of the Bug Search Tool (BST) application.
     The objective of the Cisco Bug API is to provide an entry point into the Bug Search Tool for customers and partners to view bug details
      and perform bug searches while integrating the search results into their own interfaces and applications.
     */
    namespace Bug {
        /**
         * Returns detailed information for the specified bug ID or IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!bug/get-bug-details-by-bug-ids
         * @param bug_ids
         * @returns
         */
        function GetBugDetailsbyBugIDs(bug_ids: string): any;
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
        function GetBugsbyBaseProductID(base_pid: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetBugsbyBaseProductIDandSoftwareReleases(base_pid: string, software_releases: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetSearchforBugsbyKeyword(keyword: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetSearchBugsbyProductSeriesAndAffectedSoftware(product_series: string, affected_releases: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetSearchBugsbyProductSeriesAndFixedInSoftware(product_series: string, fixed_in_releases: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetSearchBugsbyProductNameAndAffectedSoftware(product_name: string, affected_releases: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
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
        function GetSearchBugsbyProductNameAndFixedInSoftware(product_name: string, fixed_in_releases: string, page_index?: number, status?: 'O' | 'F' | 'T', modified_date?: '1' | '2' | '3' | '4' | '5', severity?: '1' | '2' | '3' | '4' | '5' | '6', sort_by?: 'status' | 'modified_date ' | 'severity' | 'support_case_count' | 'modified_date_earliest '): any;
    }
    /**
     * The Cisco Support Case API v3 provides a powerful, convenient, and simple way to interact with the Cisco Support Case Manager tool and aims to improve the partner and customer experience by enabling you to access case information instantly, programmatically, and in bulk.
     */
    namespace Case {
        /**
         * Returns brief information for the specified case or cases.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-case-summary
         * @param case_ids
         * @param sort_by
         * @returns
         */
        function GetCaseSummary(case_ids: string, sort_by?: 'UPDATED_DATE' | 'STATUS'): any;
        /**
         * Returns detailed information for the specified case.
         * @doc https://developer.cisco.com/docs/support-apis/#!case/get-case-details
         * @param case_ids
         * @returns
         */
        function GetCaseDetails(case_ids: string): any;
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
        function GetCaseByContractID(contract_ids: string, date_created_from?: string, date_created_to?: string, status_flag?: 'O' | 'C', sort_by?: 'UPDATED_DATE' | 'STATUS', page_index?: number): any;
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
        function GetCaseByUserID(user_ids: string, date_created_from?: string, date_created_to?: string, status_flag?: 'O' | 'C', sort_by?: 'UPDATED_DATE' | 'STATUS', page_index?: number): any;
    }
    /**
     * The Cisco EoX API provides access to Cisco End of Life product data. Using the EoX Service API, customers and partners can request Cisco EoX product information for both hardware and software using a variety of input mechanisms. For more information on Cisco EoX products and the EoX lifecycle
     */
    namespace Eox {
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
        function GetCaseSummary(startDate: string | '2010-01-01', endDate: string | '2010-01-01', pageIndex?: number, eoxAttrib?: 'EO_EXT_ANNOUNCE_DATE' | 'EO_SALES_DATE' | 'EO_FAIL_ANALYSIS_DATE' | 'EO_SVC_ATTACH_DATE' | 'EO_SW_MAINTENANCE_DATE' | 'EO_SECURITY_VUL_SUPPORT_DATE' | 'EO_CONTRACT_RENEW_DATE' | 'EO_LAST_SUPPORT_DATE' | 'UPDATE_TIMESTAMP ', responseencoding?: 'xml' | 'json'): any;
        /**
         * Returns one or more EOX records for the product or products with the specified product ID (PID) or product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-product-ids
         * @param productID
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXbyProductIDs(productID: string, pageIndex?: number, responseencoding?: 'xml' | 'json'): any;
        /**
         * Returns the EoX record for products with the specified serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-serial-numbers
         * @param serialNumber
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXBySerialNumbers(serialNumber: string, pageIndex?: number, responseencoding?: 'xml' | 'json'): any;
        /**
         * Returns the EoX record for products associated with the specified software release and (optionally) the specified operating system.
         * @doc https://developer.cisco.com/docs/support-apis/#!eox/get-eox-by-software-release-strings
         * @param input
         * @param pageIndex
         * @param responseencoding
         * @returns
         */
        function GetEoXbySoftwareReleaseStrings(input: string, pageIndex: number, responseencoding?: 'xml' | 'json'): any;
    }
    /**
     * The Cisco Product Information API removes barriers to enterprise automation and can help end users shorten sales cycles and reduce operating expenses.
     */
    namespace ProductInformation {
        /**
         * Returns product information associated with the specified serial number or numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-information-by-serial-numbers
         * @param serial_numbers
         * @param page_index
         * @returns
         */
        function GetInformationbySerialNumber(serial_numbers: string, page_index?: number): any;
        /**
         * Returns product information associated with the specified product identifier or identifiers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-information-by-product-identifiers
         * @param product_ids
         * @param page_index
         * @returns
         */
        function GetInformationbyProductIdentifier(product_ids: string, page_index?: number): any;
        /**
         * Returns metadata framework (MDF) identifiers associated with the specified product identifier or identifiers.
         * @doc https://developer.cisco.com/docs/support-apis/#!product-information/get-product-mdf-information-by-product-ids
         * @param product_ids
         * @param page_index
         * @returns
         */
        function GetMDFbyProductId(product_ids: string, page_index?: number): any;
    }
    /**
     * Cisco’s customers and partners today use Cisco hosted web applications to gather product information using serial numbers for products either already installed at a customer site or being considered for new purchases.
     */
    namespace SerialNumberToInformation {
        /**
         * Returns coverage status for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-status-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetCoverageStatusbySerialNumber(sr_no: string): any;
        /**
         * Returns coverage status, warranty, and product identifier details for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-summary-by-serial-numbers
         * @param sr_no
         * @param page_index
         * @returns
         */
        function GetCoverageSummarybySerialNumber(sr_no: string, page_index?: number): any;
        /**
         * Returns coverage status, warranty, and product identifier details for a set of instance numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-coverage-summary-by-instance-numbers
         * @param instance_no
         * @param page_index
         * @returns
         */
        function GetCoverageSummarybyInstanceNumber(instance_no: string, page_index?: number): any;
        /**
         * Returns the orderable PID for the specified device serial number.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-orderable-product-identifiers-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetOrderableProductIdentifierbySerialNumber(sr_no: string): Promise<any>;
        /**
         * Returns owner coverage status information for a set of serial numbers.
         * @doc https://developer.cisco.com/docs/support-apis/#!serial-number-to-information/get-owner-coverage-status-by-serial-numbers
         * @param sr_no
         * @returns
         */
        function GetOwnerCoverageStatusbySerialNumbers(sr_no: string): Promise<any>;
    }
    /**
     * The Cisco Service Order Return (RMA) API provides a powerful, convenient, and simple way to interact with the Cisco RMA service and enables you to access RMA information instantly, programmatically, and in bulk.
     */
    namespace ServiceOrderReturn {
        /**
         * Returns detailed information about the specified RMA.
         * @doc https://developer.cisco.com/docs/support-apis/#!service-order-return-rma/get-rma-details-by-rma-number
         * @param rma_numbers
         * @returns
         */
        function GETRMADetailsbyRMANumber(rma_numbers: number): any;
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
        function GETRMAsbyUserID(user_ids: string, fromDate?: string, toDate?: string, status?: 'open' | 'booked' | 'hold' | 'closed' | 'cancelled', sortBy?: 'orderdate' | 'status'): any;
    }
    /**
     * The process of selecting the appropriate software upgrade path for your environment can be complex. The Cisco Software Suggestions streamline the software selection process by providing the necessary information to assist you in making intelligent choices for upgrading your software.
     */
    namespace SoftwareSuggestion {
        /**
         * Returns a list of Cisco suggested software releases and images for a list of product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-and-images-by-product-ids
         * @param productIds
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesAndImagesbyProductIDs(productIds: string, pageIndex?: number): Promise<any>;
        /**
         * Returns a list of Cisco suggested software releases (without images) for a list of product IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-by-product-ids-no-images
         * @param productIds
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesbyProductIDs(productIds: string, pageIndex?: number): Promise<any>;
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
        function GetCompatibleSoftwareReleasesbyProductIDs(productId: string, currentImage?: string, currentRelease?: string, pageIndex?: number, supportedFeatures?: string, supportedHardware?: string): Promise<any>;
        /**
         * Returns a list of Cisco suggested software releases and images for a list of mdf IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-and-images-by-mdf-ids
         * @param mdfId
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesAndImagesbyMDFIDs(mdfId: string, pageIndex?: number): Promise<any>;
        /**
         * Returns a list of Cisco suggested software releases (without images) for a list of mdf IDs.
         * @doc https://developer.cisco.com/docs/support-apis/#!software-suggestion/get-suggested-releases-by-mdf-ids-no-images
         * @param mdfId
         * @param pageIndex
         * @returns
         */
        function GetSuggestedReleasesbyMDFIDs(mdfId: string, pageIndex?: number): Promise<any>;
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
        function GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(mdfId: string, currentImage?: string, currentRelease?: string, pageIndex?: number, supportedFeatures?: 'orderdate' | 'status', supportedHardware?: string): Promise<any>;
    }
}
