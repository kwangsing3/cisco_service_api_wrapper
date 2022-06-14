/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 *
 */
export const header = {
  'User-Agent': '',
  Referer: '',
};

const Common = {
  TOKEN: '',
  HEADER: header,
};

/********************
 * Set Token
 *********************/
export function SetToken(token: string) {
  Common.TOKEN = token;
}

/********************
 * Set RESTful request Header
 *********************/
export function SetHeader(input: any) {
  if (Object.prototype.hasOwnProperty.call(input, 'User-Agent'))
    Common.HEADER['User-Agent'] = input['User-Agent'];
  if (Object.prototype.hasOwnProperty.call(input, 'Referer'))
    Common.HEADER['Referer'] = input['Referer'];
}
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetToken(): string {
  return Common.TOKEN;
}

/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetHeader(): any {
  return Common.HEADER;
}

/*
  -axios-

  axios.get(url, config)
  axios.delete(url, config)
  axios.head(url, config)
  axios.post(url, data, config)
  axios.put(url, data, config)
  axios.patch(url, data, config)

*/
