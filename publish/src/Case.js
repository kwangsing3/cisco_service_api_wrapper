"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/case/v3';
class Case {
    async GetCaseSummary(case_ids, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + `/cases/case_ids/${case_ids}`;
        const arr = c_module.GetParams(entity.GetCaseSummary);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            case_ids: case_ids,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCaseDetails(case_ids) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + `/cases/details/case_id/${case_ids}`;
        const arr = c_module.GetParams(entity.GetCaseDetails);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            case_ids: case_ids,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCaseByContractID(contract_ids, date_created_from, date_created_to, status_flag, sort_by, page_index) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + `/cases/contracts/contract_ids/${contract_ids}`;
        const arr = c_module.GetParams(entity.GetCaseByContractID);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            contract_ids: contract_ids,
            date_created_from: date_created_from,
            date_created_to: date_created_to,
            status_flag: status_flag,
            sort_by: sort_by,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetCaseByUserID(user_ids, date_created_from, date_created_to, status_flag, sort_by, page_index) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + `/cases/users/user_ids/${user_ids}`;
        const arr = c_module.GetParams(entity.GetCaseByUserID);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            user_ids: user_ids,
            date_created_from: date_created_from,
            date_created_to: date_created_to,
            status_flag: status_flag,
            sort_by: sort_by,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.Case = Case;
const entity = new Case();
//# sourceMappingURL=Case.js.map