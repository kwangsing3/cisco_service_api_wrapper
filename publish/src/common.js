"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReturnString = exports.GetParams = exports.GetHeader = exports.GetToken = exports.SetHeader = exports.SetToken = exports.header = void 0;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 *
 */
exports.header = {
    'User-Agent': '',
    Referer: '',
};
const Common = {
    TOKEN: '',
    HEADER: exports.header,
};
/********************
 * Set Token
 *********************/
function SetToken(token) {
    Common.TOKEN = `${token}`;
}
exports.SetToken = SetToken;
/********************
 * Set RESTful request Header
 *********************/
function SetHeader(input) {
    if (Object.prototype.hasOwnProperty.call(input, 'User-Agent'))
        Common.HEADER['User-Agent'] = input['User-Agent'];
    if (Object.prototype.hasOwnProperty.call(input, 'Referer'))
        Common.HEADER['Referer'] = input['Referer'];
}
exports.SetHeader = SetHeader;
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetToken() {
    return Common.TOKEN;
}
exports.GetToken = GetToken;
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetHeader() {
    return {
        'User-Agent': '',
        Referer: '',
        Authorization: Common.TOKEN,
    };
}
exports.GetHeader = GetHeader;
/*
  -axios-

  GET(url, config)
  axios.delete(url, config)
  axios.head(url, config)
  POST(url, data, config)
  axios.put(url, data, config)
  axios.patch(url, data, config)

*/
function GetParams(func) {
    let str = func.toString();
    str = str
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/(.)*/g, '')
        .replace(/{[\s\S]*}/, '')
        .replace(/=>/g, '')
        .trim();
    const start = str.indexOf('(') + 1;
    const end = str.length - 1;
    const result = str.substring(start, end).split(', ');
    const params = [];
    result.forEach(element => {
        element = element.replace(/=[\s\S]*/g, '').trim();
        if (element.length > 0) {
            params.push(element);
        }
    });
    return params;
}
exports.GetParams = GetParams;
function GetReturnString(basic, parms, value) {
    let result = '';
    for (let i = 0; i < parms.length; i++) {
        if (value[parms[i]] === undefined || value[parms[i]] === '') {
            continue;
        }
        /* 如果有{}標籤 則使用替代方法 */
        if (basic.includes('{' + parms[i] + '}')) {
            basic = basic.replace('{' + parms[i] + '}', value[parms[i]]);
            continue;
        }
        result += (i === 0 ? '?' : '&') + parms[i] + '=' + value[parms[i]];
    }
    return basic + result;
}
exports.GetReturnString = GetReturnString;
//# sourceMappingURL=common.js.map