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
  Common.TOKEN = `${token}`;
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
  return {
    'User-Agent': '',
    Referer: '',
    Authorization: Common.TOKEN,
  };
}

/*
  -axios-

  GET(url, config)
  axios.delete(url, config)
  axios.head(url, config)
  POST(url, data, config)
  axios.put(url, data, config)
  axios.patch(url, data, config)

*/

export function GetParams(func: Function) {
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
  const params: string[] = [];
  result.forEach(element => {
    element = element.replace(/=[\s\S]*/g, '').trim();
    if (element.length > 0) {
      params.push(element);
    }
  });
  return params;
}
export function GetReturnString(
  basic: string,
  parms: string[],
  value: any
): string {
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
