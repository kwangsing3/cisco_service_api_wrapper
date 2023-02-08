export declare class SerialNumberToInformation {
    GetCoverageStatusbySerialNumber(sr_no: string): Promise<any>;
    GetCoverageSummarybySerialNumber(sr_no: string, page_index?: number): Promise<any>;
    GetCoverageSummarybyInstanceNumber(instance_no: string, page_index?: number): Promise<any>;
    GetOrderableProductIdentifierbySerialNumber(sr_no: string): Promise<any>;
    GetOwnerCoverageStatusbySerialNumber(sr_no: string): Promise<any>;
}
