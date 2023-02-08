export declare class ProductInformation {
    GetInformationbySerialNumber(serial_numbers: string, page_index?: number): Promise<any>;
    GetInformationbyProductIdentifier(product_ids: string, page_index?: number): Promise<any>;
    GetMDFbyProductId(product_ids: string, page_index?: number): Promise<any>;
}
