"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInformation = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 */
const httpmethod_1 = require("./utility/httpmethod");
const c_module = require("./common");
const baseURL = 'https://api.cisco.com/product/v1';
class ProductInformation {
    async GetInformationbySerialNumber(serial_numbers, page_index) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/information/serial_numbers/{serial_numbers}';
        const arr = c_module.GetParams(entity.GetInformationbySerialNumber);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            serial_numbers: serial_numbers,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetInformationbyProductIdentifier(product_ids, page_index) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/information/product_ids/{product_ids}';
        const arr = c_module.GetParams(entity.GetInformationbyProductIdentifier);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_ids: product_ids,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
    async GetMDFbyProductId(product_ids, page_index) {
        const header = c_module.GetHeader();
        let targetURL = baseURL + '/information/product_ids_mdf/{product_ids}';
        const arr = c_module.GetParams(entity.GetMDFbyProductId);
        targetURL = c_module.GetReturnString(targetURL, arr, {
            product_ids: product_ids,
            page_index: page_index,
        });
        const data = await (0, httpmethod_1.GET)(targetURL, header);
        return data.data;
    }
}
exports.ProductInformation = ProductInformation;
const entity = new ProductInformation();
//# sourceMappingURL=ProductInformation.js.map