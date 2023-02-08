"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eox = void 0;
const c_module = require("./common");
const httpmethod_1 = require("./utility/httpmethod");
const baseURL = 'https://api.cisco.com/supporttools/eox/rest/5';
class Eox {
    async GetCaseSummary(startDate, endDate, pageIndex = 1, eoxAttrib, responseencoding) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/EOXByDates/{pageIndex}/{startDate}/{endDate}';
        const arr = c_module.GetParams(entity.GetCaseSummary);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            startDate: startDate,
            endDate: endDate,
            pageIndex: pageIndex,
            eoxAttrib: eoxAttrib,
            responseencoding: responseencoding,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetEoXbyProductIDs(productID, pageIndex = 1, responseencoding) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/EOXByProductID/{pageIndex}/{productID}';
        const arr = c_module.GetParams(entity.GetEoXbyProductIDs);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            productID: productID,
            pageIndex: pageIndex,
            responseencoding: responseencoding,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetEoXBySerialNumbers(serialNumber, pageIndex = 1, responseencoding) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/EOXBySerialNumber/{pageIndex}/{serialNumber}';
        const arr = c_module.GetParams(entity.GetEoXBySerialNumbers);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            serialNumber: serialNumber,
            pageIndex: pageIndex,
            responseencoding: responseencoding,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetEoXbySoftwareReleaseStrings(input, pageIndex, responseencoding) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/EOXBySWReleaseString/{pageIndex}/{input}';
        const arr = c_module.GetParams(entity.GetEoXbySoftwareReleaseStrings);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            input: input,
            pageIndex: pageIndex,
            responseencoding: responseencoding,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.Eox = Eox;
const entity = new Eox();
//# sourceMappingURL=Eox.js.map