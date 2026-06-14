/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/cisco_service_api_wrapper
 *
 */
import * as c from './common';

export function SetHeader(input: {'User-Agent'?: string; Referer?: string}) {
  c.SetHeader(input);
}
