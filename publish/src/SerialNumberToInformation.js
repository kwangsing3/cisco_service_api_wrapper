"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialNumberToInformation = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/sn2info/v2';
class SerialNumberToInformation {
    async GetCoverageStatusbySerialNumber(sr_no) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/coverage/status/serial_numbers/{sr_no}';
        const arr = c_module.GetParams(entity.GetCoverageStatusbySerialNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            sr_no: sr_no,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCoverageSummarybySerialNumber(sr_no, page_index = 1) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/coverage/summary/serial_numbers/{sr_no}';
        const arr = c_module.GetParams(entity.GetCoverageSummarybySerialNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            sr_no: sr_no,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCoverageSummarybyInstanceNumber(instance_no, page_index = 1) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/coverage/summary/instance_numbers/{instance_no}';
        const arr = c_module.GetParams(entity.GetCoverageSummarybyInstanceNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            instance_no: instance_no,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetOrderableProductIdentifierbySerialNumber(sr_no) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/identifiers/orderable/serial_numbers/{sr_no}';
        const arr = c_module.GetParams(entity.GetOrderableProductIdentifierbySerialNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            sr_no: sr_no,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetOwnerCoverageStatusbySerialNumber(sr_no) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/coverage/owner_status/serial_numbers/{sr_no}';
        const arr = c_module.GetParams(entity.GetOwnerCoverageStatusbySerialNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            sr_no: sr_no,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.SerialNumberToInformation = SerialNumberToInformation;
const entity = new SerialNumberToInformation();
//# sourceMappingURL=SerialNumberToInformation.js.map