import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponseHeaders,
  type RawAxiosResponseHeaders,
} from 'axios';
/**
 * 統一回覆格式
 */
type Result<T> = {
  success: boolean;
  data: T | null;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: AxiosRequestConfig;
};

/**
 * GET method
 * @param url request path
 * @returns 取得伺服器回應
 */
export async function GET<T>(
  url: string,
  headers?: {[x: string]: string},
  timeout?: number,
  maxRedirects?: number
): Promise<Result<T>> {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: url,
    headers: headers ?? {},
    timeout: timeout ?? 15000,
  };
  //code 3xx 在一般情況下歸納成錯誤處理，這裡直接歸納回來
  if (maxRedirects === 0) {
    config.maxRedirects = maxRedirects;
    config.validateStatus = function (status: number) {
      return status >= 200 && status < 303;
    };
  }
  if (waitRateMS !== 0) await Sleep(GetRateLimit());
  cacheTime = Date.now();
  try {
    const response = await axios(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config,
    };
  } catch (error) {
    return HandleAxiosError(error as AxiosError);
  }
}
/**
 * POST method
 * @param url request path
 * @param content request body
 * @returns 取決於伺服器實作，可能不會出現回傳。
 */
export async function POST<T>(
  url: string,
  header: {[x: string]: string},
  content: object | string,
  timeout?: number,
  maxRedirects?: number
): Promise<Result<T>> {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: url,
    data: content,
    headers: header,
    timeout: timeout ?? 15000,
  };
  //code 3xx 在一般情況下歸納成錯誤處理，這裡直接歸納回來
  if (maxRedirects === 0) {
    config.maxRedirects = maxRedirects;
    config.validateStatus = function (status: number) {
      return status >= 200 && status < 303;
    };
  }
  if (waitRateMS !== 0) await Sleep(GetRateLimit());
  cacheTime = Date.now();
  try {
    const response = await axios(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config,
    };
  } catch (error) {
    return HandleAxiosError(error as AxiosError);
  }
}
/*
  依照速率阻塞線程。
*/
export function Sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

let waitRateMS = 0;
let cacheTime = Date.now();

/**
 * 設定每分鐘可接受的請求次數
 * @param requestsPerMinute 每分鐘的請求數
 */
export const SetRatePerMin = (requestsPerMinute: number) => {
  waitRateMS = 60000 / requestsPerMinute;
};

/**
 * 取得當前速率限制的等待時間，單位毫秒
 * @returns 需要等待的毫秒數
 */
export const GetRateLimit = (): number => {
  const elapsed = Date.now() - cacheTime;
  return Math.max(0, waitRateMS - elapsed);
};

// 錯誤處理函式
function HandleAxiosError<T>(error: AxiosError): Result<T> {
  let errorMessage = 'Unknown error occurred';

  // 伺服器回應的錯誤
  if (error.response) {
    errorMessage =
      `Server error - Status: ${error.response.status} (${error.response.statusText}). ` +
      `URL: ${error.config?.url}`;
    if (error.response.status !== 404) {
      try {
        const data = JSON.stringify(error.response.data, null, 2);
        console.error(`❌ Response data:\n${data}`);
      } catch {
        console.error(`❌ Response data: ${String(error.response.data)}`);
      }
    }
  } else if (error.request) {
    errorMessage =
      'No response received from server. The request was made but no response was received.';
  } else {
    errorMessage = `Request error: ${error.message}`;
  }

  console.error(`❌ ${errorMessage}`);

  return {
    success: false,
    data: null as unknown as T,
    status: error.response?.status || 0,
    statusText: error.response?.statusText || 'Error',
    headers: error.response?.headers || {},
    config: error.config as AxiosRequestConfig,
  };
}
