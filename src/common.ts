/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 *
 */
import GetToken from './api/getToken';

export const header = {
  'User-Agent': '',
  Referer: '',
};

const Common = {
  HEADER: header,
};

export function SetHeader(input: any) {
  if (Object.prototype.hasOwnProperty.call(input, 'User-Agent'))
    Common.HEADER['User-Agent'] = input['User-Agent'];
  if (Object.prototype.hasOwnProperty.call(input, 'Referer'))
    Common.HEADER['Referer'] = input['Referer'];
}

export async function GetHeader(): Promise<Record<string, string>> {
  const token = await GetToken();
  return {
    'User-Agent': Common.HEADER['User-Agent'],
    Referer: Common.HEADER['Referer'],
    Authorization: `Bearer ${token}`,
  };
}
