import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

export async function getInfoBySerialNumbers(
  serial_numbers: string,
  page_index?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.product.bySerialNumbers(serial_numbers), {page_index}),
      GetHeader()
    )
  ).data;
}

export async function getInfoByProductIds(
  product_ids: string,
  page_index?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.product.byProductIds(product_ids), {page_index}),
      GetHeader()
    )
  ).data;
}

export async function getMdfByProductIds(
  product_ids: string,
  page_index?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.product.mdfByProductIds(product_ids), {page_index}),
      GetHeader()
    )
  ).data;
}
