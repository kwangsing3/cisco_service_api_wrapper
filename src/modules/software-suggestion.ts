import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

type CompatibleOpts = {
  currentImage?: string;
  currentRelease?: string;
  pageIndex?: number;
  supportedFeatures?: string;
  supportedHardware?: string;
};

export async function getSuggestedReleasesAndImagesByProductIds(
  productIds: string,
  pageIndex?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.software.suggestedByProductIds(productIds), {pageIndex}),
      await GetHeader()
    )
  ).data;
}

export async function getSuggestedReleasesByProductIds(
  productIds: string,
  pageIndex?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.software.releasesByProductIds(productIds), {pageIndex}),
      await GetHeader()
    )
  ).data;
}

export async function getCompatibleReleasesByProductId(
  productId: string,
  opts?: CompatibleOpts
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.software.compatibleByProductId(productId), opts),
      await GetHeader()
    )
  ).data;
}

export async function getSuggestedReleasesAndImagesByMdfIds(
  mdfId: string,
  pageIndex?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.software.suggestedByMdfIds(mdfId), {pageIndex}),
      await GetHeader()
    )
  ).data;
}

export async function getSuggestedReleasesByMdfIds(
  mdfId: string,
  pageIndex?: number
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.software.releasesByMdfIds(mdfId), {pageIndex}),
      await GetHeader()
    )
  ).data;
}

export async function getCompatibleAndSuggestedReleasesByMdfId(
  mdfId: string,
  opts?: CompatibleOpts & {supportedFeatures?: 'orderdate' | 'status'}
): Promise<any> {
  return (
    await GET(buildUrl(ep.software.compatibleByMdfId(mdfId), opts), await GetHeader())
  ).data;
}
