"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderReturn = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/return/v1.0';
class ServiceOrderReturn {
    async GETRMADetailsbyRMANumber(rma_numbers) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/returns/rma_numbers/{rma_numbers}';
        const arr = c_module.GetParams(entity.GETRMADetailsbyRMANumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            rma_numbers: rma_numbers,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GETRMAsbyUserID(user_ids, fromDate, toDate, status, sortBy) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/returns/users/user_ids/{user_ids}';
        const arr = c_module.GetParams(entity.GETRMAsbyUserID);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            user_ids: user_ids,
            fromDate: fromDate,
            toDate: toDate,
            status: status,
            sortBy: sortBy,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.ServiceOrderReturn = ServiceOrderReturn;
const entity = new ServiceOrderReturn();
//# sourceMappingURL=ServiceOrderReturn.js.map