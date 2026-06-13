import {GET, POST} from '../utility/http.mod';
import {GetHeader} from '../common';
import {ep} from '../api/endpoints';

export async function postSoftwareReleaseByPid(input: {
  pid: string;
  currentReleaseVersion: string;
  outputReleaseVersion: 'Latest' | 'Above' | string;
  pageIndex: number;
  perPage: number;
}): Promise<any> {
  return (await POST(ep.asd.softwareReleaseByPid, GetHeader(), input)).data;
}

export async function postSoftwareReleaseByImage(input: {
  pid: string;
  imageNames: string[];
  pageIndex: number;
  perPage: number;
}): Promise<any> {
  return (await POST(ep.asd.softwareReleaseByImage, GetHeader(), input)).data;
}

export async function getK9Agreement(): Promise<any> {
  return (await GET(ep.asd.k9Agreement, GetHeader())).data;
}

export async function getEulaAgreement(): Promise<any> {
  return (await GET(ep.asd.eulaAgreement, GetHeader())).data;
}

export async function postK9Agreement(input: {
  status: 'Accepted' | 'Declined';
  declineComments: number;
  fileNames: string;
  confirm: 'Confirm_Checked';
  busFunction: 'COMM_OR_CIVIL';
  govMilCountries: 'GOV_OR_MIL';
}): Promise<any> {
  return (await POST(ep.asd.k9Agreement, GetHeader(), input)).data;
}

export async function postEulaAgreement(input: {
  status: 'Accepted' | 'Declined';
  declineComments: number;
  fileNames: string;
}): Promise<any> {
  return (await POST(ep.asd.eulaAgreement, GetHeader(), input)).data;
}

export async function postDownloadVariant(input: {
  pid: string;
  mdfId: string;
  metadataTransId: string;
  imageGuids: string[];
}): Promise<any> {
  return (await POST(ep.asd.downloadVariant, GetHeader(), input)).data;
}

export async function postSoftwareStatus(input: {
  imageNames: string[];
}): Promise<any> {
  return (await POST(ep.asd.softwareStatus, GetHeader(), input)).data;
}
