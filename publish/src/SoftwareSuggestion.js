"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareSuggestion = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/software/suggestion/v2';
class SoftwareSuggestion {
    async GetSuggestedReleasesAndImagesbyProductIDs(productIds, pageIndex) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/software/productIds/{productIds}';
        const arr = c_module.GetParams(entity.GetSuggestedReleasesAndImagesbyProductIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            productIds: productIds,
            pageIndex: pageIndex,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSuggestedReleasesbyProductIDs(productIds, pageIndex) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/releases/productIds/{productIds}';
        const arr = c_module.GetParams(entity.GetSuggestedReleasesbyProductIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            productIds: productIds,
            pageIndex: pageIndex,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCompatibleSoftwareReleasesbyProductIDs(productId, currentImage, currentRelease, pageIndex = 1, supportedFeatures, supportedHardware) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/compatible/productId/{basePID}';
        const arr = c_module.GetParams(entity.GetCompatibleSoftwareReleasesbyProductIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            productId: productId,
            currentImage: currentImage,
            currentRelease: currentRelease,
            pageIndex: pageIndex,
            supportedFeatures: supportedFeatures,
            supportedHardware: supportedHardware,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSuggestedReleasesAndImagesbyMDFIDs(mdfId, pageIndex) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/software/mdfIds/{mdfIds}';
        const arr = c_module.GetParams(entity.GetSuggestedReleasesAndImagesbyMDFIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            mdfId: mdfId,
            pageIndex: pageIndex,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSuggestedReleasesbyMDFIDs(mdfId, pageIndex) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/releases/mdfIds/{mdfIds}';
        const arr = c_module.GetParams(entity.GetSuggestedReleasesbyMDFIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            mdfId: mdfId,
            pageIndex: pageIndex,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCompatibleAndSuggestedSoftwareReleasesbyMDFID(mdfId, currentImage, currentRelease, pageIndex, supportedFeatures, supportedHardware) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/suggestions/compatible/mdfId/{mdfId}';
        const arr = c_module.GetParams(entity.GetCompatibleAndSuggestedSoftwareReleasesbyMDFID);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            mdfId: mdfId,
            currentImage: currentImage,
            currentRelease: currentRelease,
            pageIndex: pageIndex,
            supportedFeatures: supportedFeatures,
            supportedHardware: supportedHardware,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.SoftwareSuggestion = SoftwareSuggestion;
const entity = new SoftwareSuggestion();
//# sourceMappingURL=SoftwareSuggestion.js.map