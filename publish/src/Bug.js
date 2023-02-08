"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bugs = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/bug/v2.0';
class Bugs {
    async GetBugDetailsbyBugIDs(bug_ids) {
        const header = c_module.GetHeader();
        const targetURL = baseURL + `/bugs/bug_ids/${bug_ids}`;
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetBugsbyBaseProductID(base_pid, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + `/bugs/products/product_id/${base_pid}`;
        const arr = c_module.GetParams(entity.GetBugsbyBaseProductID);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            base_pid: base_pid,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetBugsbyBaseProductIDandSoftwareReleases(base_pid, software_releases, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL +
            `/bugs/products/product_id/${base_pid}/software_releases/${software_releases}`;
        const arr = c_module.GetParams(entity.GetBugsbyBaseProductIDandSoftwareReleases);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            base_pid: base_pid,
            software_releases: software_releases,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSearchforBugsbyKeyword(keyword, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/bugs/keyword/cisco';
        const arr = c_module.GetParams(entity.GetSearchforBugsbyKeyword);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            keyword: keyword,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSearchBugsbyProductSeriesAndAffectedSoftware(product_series, affected_releases, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL +
            `/bugs/product_series/${product_series}/affected_releases/${affected_releases}`;
        const arr = c_module.GetParams(entity.GetSearchBugsbyProductSeriesAndAffectedSoftware);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_series: product_series,
            affected_releases: affected_releases,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSearchBugsbyProductSeriesAndFixedInSoftware(product_series, fixed_in_releases, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL +
            `/bugs/product_series/${product_series}/affected_releases/${fixed_in_releases}`;
        const arr = c_module.GetParams(entity.GetSearchBugsbyProductSeriesAndFixedInSoftware);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_series: product_series,
            fixed_in_releases: fixed_in_releases,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSearchBugsbyProductNameAndAffectedSoftware(product_name, affected_releases, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL +
            `/bugs/product_name/${product_name}/affected_releases${affected_releases}`;
        const arr = c_module.GetParams(entity.GetSearchBugsbyProductNameAndAffectedSoftware);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_name: product_name,
            affected_releases: affected_releases,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetSearchBugsbyProductNameAndFixedInSoftware(product_name, fixed_in_releases, page_index, status, modified_date, severity, sort_by) {
        const header = c_module.GetHeader();
        let targetURL = baseURL +
            `/bugs/product_name/${product_name}/fixed_in_releases${fixed_in_releases}`;
        const arr = c_module.GetParams(entity.GetSearchBugsbyProductNameAndFixedInSoftware);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_name: product_name,
            fixed_in_releasess: fixed_in_releases,
            page_index: page_index,
            status: status,
            modified_date: modified_date,
            severity: severity,
            sort_by: sort_by,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.Bugs = Bugs;
const entity = new Bugs();
//# sourceMappingURL=Bug.js.map