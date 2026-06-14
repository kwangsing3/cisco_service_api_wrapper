import {GET} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';
import {buildUrl} from '../utility/query';

export async function getCoverageStatusBySerialNumbers(
  sr_no: string
): Promise<any> {
  return (await GET(ep.serialNumber.coverageStatus(sr_no), await GetHeader())).data;
}

export async function getCoverageSummaryBySerialNumbers(
  sr_no: string,
  page_index = 1
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.serialNumber.coverageSummary(sr_no), {page_index}),
      await GetHeader()
    )
  ).data;
}

export async function getCoverageSummaryByInstanceNumbers(
  instance_no: string,
  page_index = 1
): Promise<any> {
  return (
    await GET(
      buildUrl(ep.serialNumber.instanceSummary(instance_no), {page_index}),
      await GetHeader()
    )
  ).data;
}

export async function getOrderableIdentifiersBySerialNumbers(
  sr_no: string
): Promise<any> {
  return (await GET(ep.serialNumber.orderableIdentifiers(sr_no), await GetHeader()))
    .data;
}

export async function getOwnerCoverageStatusBySerialNumbers(
  sr_no: string
): Promise<any> {
  return (await GET(ep.serialNumber.ownerStatus(sr_no), await GetHeader())).data;
}
