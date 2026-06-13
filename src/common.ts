/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
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

export function SetToken(token: string) {
  Common.TOKEN = `${token}`;
}

export function SetHeader(input: any) {
  if (Object.prototype.hasOwnProperty.call(input, 'User-Agent'))
    Common.HEADER['User-Agent'] = input['User-Agent'];
  if (Object.prototype.hasOwnProperty.call(input, 'Referer'))
    Common.HEADER['Referer'] = input['Referer'];
}

export function GetToken(): string {
  return Common.TOKEN;
}

export function GetHeader(): Record<string, string> {
  return {
    'User-Agent': Common.HEADER['User-Agent'],
    Referer: Common.HEADER['Referer'],
    Authorization: Common.TOKEN,
  };
}
