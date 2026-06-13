const BUG  = 'https://apix.cisco.com/bug/v2.0';
const CASE = 'https://apix.cisco.com/case/v3';
const EOX  = 'https://apix.cisco.com/supporttools/eox/rest/5';
const PROD = 'https://apix.cisco.com/product/v1';
const SN   = 'https://apix.cisco.com/sn2info/v2';
const RMA  = 'https://apix.cisco.com/return/v1.0';
const SW   = 'https://apix.cisco.com/software/suggestion/v2';
const ASD  = 'https://apix.cisco.com/software/v4.0';

export const ep = {
  bug: {
    byBugIds:                       (ids: string)                        => `${BUG}/bugs/bug_ids/${ids}`,
    byProductId:                    (pid: string)                        => `${BUG}/bugs/products/product_id/${pid}`,
    byProductIdAndRelease:          (pid: string, release: string)       => `${BUG}/bugs/products/product_id/${pid}/software_releases/${release}`,
    byKeyword:                      (keyword: string)                    => `${BUG}/bugs/keyword/${keyword}`,
    byProductSeriesAffectedRelease: (series: string, release: string)    => `${BUG}/bugs/product_series/${series}/affected_releases/${release}`,
    byProductSeriesFixedRelease:    (series: string, release: string)    => `${BUG}/bugs/product_series/${series}/fixed_in_releases/${release}`,
    byProductNameAffectedRelease:   (name: string, release: string)      => `${BUG}/bugs/product_name/${name}/affected_releases/${release}`,
    byProductNameFixedRelease:      (name: string, release: string)      => `${BUG}/bugs/product_name/${name}/fixed_in_releases/${release}`,
  },
  case: {
    summary:    (ids: string) => `${CASE}/cases/case_ids/${ids}`,
    details:    (id: string)  => `${CASE}/cases/details/case_id/${id}`,
    byContract: (ids: string) => `${CASE}/cases/contracts/contract_ids/${ids}`,
    byUser:     (ids: string) => `${CASE}/cases/users/user_ids/${ids}`,
  },
  eox: {
    byDates:           (page: number, start: string, end: string) => `${EOX}/EOXByDates/${page}/${start}/${end}`,
    byProductIds:      (page: number, ids: string)                => `${EOX}/EOXByProductID/${page}/${ids}`,
    bySerialNumbers:   (page: number, sns: string)                => `${EOX}/EOXBySerialNumber/${page}/${sns}`,
    bySoftwareRelease: (page: number)                             => `${EOX}/EOXBySWReleaseString/${page}`,
  },
  product: {
    bySerialNumbers: (sns: string) => `${PROD}/information/serial_numbers/${sns}`,
    byProductIds:    (ids: string) => `${PROD}/information/product_ids/${ids}`,
    mdfByProductIds: (ids: string) => `${PROD}/information/product_ids_mdf/${ids}`,
  },
  serialNumber: {
    coverageStatus:       (sns: string) => `${SN}/coverage/status/serial_numbers/${sns}`,
    coverageSummary:      (sns: string) => `${SN}/coverage/summary/serial_numbers/${sns}`,
    instanceSummary:      (nos: string) => `${SN}/coverage/summary/instance_numbers/${nos}`,
    orderableIdentifiers: (sns: string) => `${SN}/identifiers/orderable/serial_numbers/${sns}`,
    ownerStatus:          (sns: string) => `${SN}/coverage/owner_status/serial_numbers/${sns}`,
  },
  rma: {
    byRmaNumber: (num: number) => `${RMA}/returns/rma_numbers/${num}`,
    byUserId:    (ids: string) => `${RMA}/returns/users/user_ids/${ids}`,
  },
  software: {
    suggestedByProductIds:  (ids: string) => `${SW}/suggestions/software/productIds/${ids}`,
    releasesByProductIds:   (ids: string) => `${SW}/suggestions/releases/productIds/${ids}`,
    compatibleByProductId:  (id: string)  => `${SW}/suggestions/compatible/productId/${id}`,
    suggestedByMdfIds:      (ids: string) => `${SW}/suggestions/software/mdfIds/${ids}`,
    releasesByMdfIds:       (ids: string) => `${SW}/suggestions/releases/mdfIds/${ids}`,
    compatibleByMdfId:      (id: string)  => `${SW}/suggestions/compatible/mdfId/${id}`,
  },
  asd: {
    softwareReleaseByPid:   `${ASD}/metadata/pidrelease`,
    softwareReleaseByImage: `${ASD}/metadata/pidimage`,
    k9Agreement:            `${ASD}/compliance/k9`,
    eulaAgreement:          `${ASD}/compliance/eula`,
    downloadVariant:        `${ASD}/download/pidimage`,
    softwareStatus:         `${ASD}/metadata/images`,
  },
};
