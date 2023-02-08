export declare class Eox {
    GetCaseSummary(startDate: string | '2010-01-01', endDate: string | '2010-01-01', pageIndex?: number, eoxAttrib?: 'EO_EXT_ANNOUNCE_DATE' | 'EO_SALES_DATE' | 'EO_FAIL_ANALYSIS_DATE' | 'EO_SVC_ATTACH_DATE' | 'EO_SW_MAINTENANCE_DATE' | 'EO_SECURITY_VUL_SUPPORT_DATE' | 'EO_CONTRACT_RENEW_DATE' | 'EO_LAST_SUPPORT_DATE' | 'UPDATE_TIMESTAMP ', responseencoding?: 'xml' | 'json'): Promise<any>;
    GetEoXbyProductIDs(productID: string, pageIndex?: number, responseencoding?: 'xml' | 'json'): Promise<any>;
    GetEoXBySerialNumbers(serialNumber: string, pageIndex?: number, responseencoding?: 'xml' | 'json'): Promise<any>;
    GetEoXbySoftwareReleaseStrings(input: string, pageIndex: number, responseencoding?: 'xml' | 'json'): Promise<any>;
}
