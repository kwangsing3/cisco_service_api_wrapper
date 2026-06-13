/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 *
 */
import * as c from './common';
import axios from 'axios';

export async function Init(input: {client_id: string; client_serect: string}) {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: input.client_id,
    client_secret: input.client_serect,
  }).toString();
  const raw = await axios({
    method: 'post',
    url: 'https://cloudsso.cisco.com/as/token.oauth2',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: body,
  });
  c.SetToken(`${raw.data.token_type} ${raw.data.access_token}`);
}

export function GetToken(): string {
  const result = c.GetToken();
  if (!result) throw new Error('Call Init() before any API');
  return result;
}

export function SetHeader(input: {'User-Agent'?: string; Referer?: string}) {
  c.SetHeader(input);
}
