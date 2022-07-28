const axios = require('axios');
/**
 * GET methodt
 * @param url request path
 * @returns 取得伺服器回應
 */
export async function GET(url: string, header?: {}): Promise<any> {
  const config = {
    method: 'get',
    url: url,
    headers: header,
    timeout: 15000,
  };
  let data: any = {};

  try {
    data = await axios(config);
  } catch (error: any) {
    console.log(error);
  }
  return data['data'];
}
/**
 * POST method
 * @param url request path
 * @param content request body
 * @returns 取決於伺服器實作，可能不會出現回傳。
 */
export async function POST(
  url: string,
  header: any,
  content: object
): Promise<any> {
  const config = {
    method: 'post',
    url: url,
    data: content,
    headers: header,
  };
  let data: any = {};

  try {
    data = await axios(config);
  } catch (error: any) {
    console.log(error['message']);
  }
  return data;
}
