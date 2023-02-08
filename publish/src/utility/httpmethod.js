"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const axios = require('axios');
/**
 * GET methodt
 * @param url request path
 * @returns 取得伺服器回應
 */
async function GET(url, header) {
    const config = {
        method: 'get',
        url: url,
        headers: header,
        timeout: 15000,
    };
    let data = {};
    try {
        data = await axios(config);
    }
    catch (error) {
        console.log(error);
    }
    return data;
}
exports.GET = GET;
/**
 * POST method
 * @param url request path
 * @param content request body
 * @returns 取決於伺服器實作，可能不會出現回傳。
 */
async function POST(url, header, content) {
    const config = {
        method: 'post',
        url: url,
        data: content,
        headers: header,
    };
    let data = {};
    try {
        data = await axios(config);
    }
    catch (error) {
        console.log(error['message']);
    }
    return data;
}
exports.POST = POST;
//# sourceMappingURL=httpmethod.js.map