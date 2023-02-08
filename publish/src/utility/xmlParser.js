"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseXML = void 0;
const xml2js = require('xml2js');
/**
 * 將檔案分析成物件(Object)
 * @param content 傳入自檔案獲得的字串
 * @returns JSON
 */
async function ParseXML(content) {
    // With parser
    const parser = new xml2js.Parser( /* options */);
    return parser.parseStringPromise(content);
}
exports.ParseXML = ParseXML;
//# sourceMappingURL=xmlParser.js.map