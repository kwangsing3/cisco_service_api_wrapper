/**
 * GET methodt
 * @param url request path
 * @returns 取得伺服器回應
 */
export declare function GET(url: string, header?: {}): Promise<any>;
/**
 * POST method
 * @param url request path
 * @param content request body
 * @returns 取決於伺服器實作，可能不會出現回傳。
 */
export declare function POST(url: string, header: any, content: object): Promise<any>;
