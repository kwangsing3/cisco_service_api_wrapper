export declare class AutomatedSoftwareDistribution {
    PostSoftwareReleaseByPID(input: {
        pid: string;
        currentReleaseVersion: string;
        outputReleaseVersion: 'Latest' | 'Above' | string;
        pageIndex: number;
        perPage: number;
    }): Promise<any>;
    PostSoftwareReleaseByImage(input: {
        pid: string;
        imageNames: string[];
        pageIndex: number;
        perPage: number;
    }): Promise<any>;
    GetK9Agreement(): Promise<any>;
    GetEULAAgreement(): Promise<any>;
    PostK9Agreement(input: {
        status: 'Accepted' | 'Declined';
        declineComments: number;
        fileNames: string;
        confirm: 'Confirm_Checked';
        busFunction: 'COMM_OR_CIVIL';
        govMilCountries: 'GOV_OR_MIL';
    }): Promise<any>;
    PostEULAAgreement(input: {
        status: 'Accepted' | 'Declined';
        declineComments: number;
        fileNames: string;
    }): Promise<any>;
    PostDownloadVariant(input: {
        pid: string;
        mdfId: string;
        metadataTransId: string;
        imageGuids: string[1] | string[5];
    }): Promise<any>;
    PostSoftwareStatusVariant(input: {
        imageNames: string[1] | string[5];
    }): Promise<any>;
}
