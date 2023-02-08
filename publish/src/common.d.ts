export declare const header: {
    'User-Agent': string;
    Referer: string;
};
/********************
 * Set Token
 *********************/
export declare function SetToken(token: string): void;
/********************
 * Set RESTful request Header
 *********************/
export declare function SetHeader(input: any): void;
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export declare function GetToken(): string;
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export declare function GetHeader(): any;
export declare function GetParams(func: Function): string[];
export declare function GetReturnString(basic: string, parms: string[], value: any): string;
