"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomatedSoftwareDistribution = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/software/v4.0';
class AutomatedSoftwareDistribution {
    async PostSoftwareReleaseByPID(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/metadata/pidrelease';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
    async PostSoftwareReleaseByImage(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/compliance/k9';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
    async GetK9Agreement() {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/compliance/k9';
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetEULAAgreement() {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/compliance/eula';
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async PostK9Agreement(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/compliance/k9';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
    async PostEULAAgreement(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/compliance/eula';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
    async PostDownloadVariant(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/download/pidimage';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
    async PostSoftwareStatusVariant(input) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + '/metadata/images';
        const data = await (0, httpmethod_1.POST)(targetURL, input, header);
        return data.data;
    }
}
exports.AutomatedSoftwareDistribution = AutomatedSoftwareDistribution;
const entity = new AutomatedSoftwareDistribution();
//# sourceMappingURL=AutomatedSoftwareDistribution.js.map