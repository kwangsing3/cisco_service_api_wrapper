export declare class SoftwareSuggestion {
    GetSuggestedReleasesAndImagesbyProductIDs(productIds: string, pageIndex?: number): Promise<any>;
    GetSuggestedReleasesbyProductIDs(productIds: string, pageIndex?: number): Promise<any>;
    GetCompatibleSoftwareReleasesbyProductIDs(productId: string, currentImage?: string, currentRelease?: string, pageIndex?: number, supportedFeatures?: string, supportedHardware?: string): Promise<any>;
    GetSuggestedReleasesAndImagesbyMDFIDs(mdfId: string, pageIndex?: number): Promise<any>;
    GetSuggestedReleasesbyMDFIDs(mdfId: string, pageIndex?: number): Promise<any>;
    GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(mdfId: string, currentImage?: string, currentRelease?: string, pageIndex?: number, supportedFeatures?: 'orderdate' | 'status', supportedHardware?: string): Promise<any>;
}
