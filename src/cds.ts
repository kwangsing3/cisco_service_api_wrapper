/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/kwangsing3/Cisco_Data_Service
 *
 */
import * as movie_module from './AutomatedSoftwareDistribution';
import * as c_module from './common';
//#region
const AutomatedSoftwareDistribution_entry =
  new movie_module.AutomatedSoftwareDistribution();

const Validator = new Proxy(
  {
    //#region
    AutomatedSoftwareDistributionPostSoftwareReleaseByPID:
      AutomatedSoftwareDistribution_entry.PostSoftwareReleaseByPID,
    //#endregion
  },
  {
    get: function (obj: any, props: any) {
      return function (...params: any) {
        if (c_module.GetToken() === '') {
          throw 'Error: non-TOKEN, Call "Init" function at first before calling other functions';
        }
        return obj[props].apply(null, params);
      };
    },
  }
);
//#endregion

//#region  functions definition
/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
export function Init(token: string | undefined) {
  if (token !== '' && token !== undefined) {
    c_module.SetToken(token);
  }
}
/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetToken(): string {
  const result = c_module.GetToken();
  if (result === '') {
    throw new Error(
      'Error: non-TOKEN, Call "Init" function at first before calling other functions'
    );
  }
  return result;
}
/********************
 * Header: Set HTTP header, it's optional, but should have it.
 * @param {string} header object
 * @example
 * {
      'User-Agent': 'npm package-dev',
      Referer: 'Cisco_Data_Service-ts',
  }
 ********************/
export function SetHeader(input: any) {
  c_module.SetHeader(input);
}
//#endregion

// namespace
export namespace CiscoSupportAPI {
  /********************
   * 1.Get the primary information about a movie.
   * @param {number|string} movie_id  Movie_ID for cisco
   * @param {string} language(optional)  Language to request
   * @example Cisco_Data_Service.MOVIE.GetDetails(624860);
   *          Cisco_Data_Service.MOVIE.GetDetails(624860,'en-US');
   * @doc https://developers.themoviedb.org/3/movies/get-movie-details
   ********************/
  export namespace AutomatedSoftwareDistribution {
    export function GetK9Agreement() {
      return Validator.AutomatedSoftwareDistributionPostSoftwareReleaseByPID();
    }
  }
}
