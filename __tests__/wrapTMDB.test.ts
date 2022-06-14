//#region
import * as movie_module from '../src/AutomatedSoftwareDistribution';
import * as c_module from '../src/common';

const movie_entry = new movie_module.AutomatedSoftwareDistribution();

const URL = c_module.GetURL();
const api_key = 'UnitTest_api_key';
c_module.SetToken(api_key);

/***
  @description To fetch and get function Params
  @returns string[]
  ***/
function GetParams(func: Function) {
  let str = func.toString();
  str = str
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/(.)*/g, '')
    .replace(/{[\s\S]*}/, '')
    .replace(/=>/g, '')
    .trim();
  const start = str.indexOf('(') + 1;
  const end = str.length - 1;
  const result = str.substring(start, end).split(', ');
  const params: string[] = [];
  result.forEach(element => {
    element = element.replace(/=[\s\S]*/g, '').trim();
    if (element.length > 0) {
      params.push(element);
    }
  });
  return params;
}
/***
  @description Combine url and paramters
  @returns string
  ***/
function GetReturnString(basic: string, parms: string[], value: any): string {
  let result = `?api_key=${api_key}`;

  for (let i = 0; i < parms.length; i++) {
    if (value[parms[i]] === undefined || value[parms[i]] === '') {
      continue;
    }
    /* 如果有{}標籤 則使用替代方法 */
    if (basic.includes('{' + parms[i] + '}')) {
      basic = basic.replace('{' + parms[i] + '}', value[parms[i]]);
      continue;
    }
    result += '&' + parms[i] + '=' + value[parms[i]];
  }
  return basic + result;
}

process.on('unhandledRejection', reason => {
  throw reason;
});
//#endregion

describe('Get URLs funciton request: Movie', () => {
  test('Movies.GetDetails', async () => {
    const parms = GetParams(movie_entry.GetDetails);
    const cases = [
      {
        movie_id: 624860,
      },
      {
        movie_id: 624860,
        language: 'zh-TW',
      },
      {
        movie_id: 62486065463521864631233843384,
        language: 'asdasgsfgerersfg',
      },
    ];

    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}',
        parms,
        element
      );
      expect(
        await movie_entry.GetDetails(element.movie_id, element.language)
      ).toBe(answer);
    });
  });

  test('movie.GetAccountStates', async () => {
    const parems = GetParams(movie_entry.GetAccountStates);
    const cases = [
      {
        movie_id: 624860,
        session_id: 'asdas',
      },
      {
        movie_id: 62486065463521864631233843384,
        session_id: 'gsfgerersfg',
        guest_session_id: 'asdawduhanlfslilerk',
      },
      {
        movie_id: 62486065463521864631233843384,
        session_id: 'dasgsfgerersfg',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/account_states',
        parems,
        element
      );
      expect(
        await movie_entry.GetAccountStates(
          element.movie_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('movie.GetAlternativetitles', async () => {
    const parems = GetParams(movie_entry.GetAlternativetitles);
    const cases = [
      {
        movie_id: 624860654643384,
        country: 'asdawfz',
      },
      {
        movie_id: 34476861215,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/alternative_titles',
        parems,
        element
      );
      expect(
        await movie_entry.GetAlternativetitles(
          element.movie_id,
          element.country
        )
      ).toBe(answer);
    });
  });
  test('movie.GetChanges', async () => {
    const parems = GetParams(movie_entry.GetChanges);
    const cases = [
      {
        movie_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/changes',
        parems,
        element
      );
      expect(
        await movie_entry.GetChanges(
          element.movie_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetCredits', async () => {
    const parems = GetParams(movie_entry.GetCredits);
    const cases = [
      {
        movie_id: 454866321,
        language: undefined,
      },
      {
        movie_id: 454866321,
        language: 'en_US',
      },
      {
        movie_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/credits',
        parems,
        element
      );
      expect(
        await movie_entry.GetCredits(element.movie_id, element.language)
      ).toBe(answer);
    });
  });
  test('movie.GetExternalIDs', async () => {
    const parems = GetParams(movie_entry.GetExternalIDs);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: '54465',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/external_ids',
        parems,
        element
      );
      expect(await movie_entry.GetExternalIDs(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetImage', async () => {
    const parems = GetParams(movie_entry.GetImages);
    const cases = [
      {
        movie_id: 531846,
        language: 'en_US',
        include_image_language: 'zh-CN',
      },
      {
        movie_id: 531846,
        language: undefined,
        include_image_language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/images',
        parems,
        element
      );
      expect(
        await movie_entry.GetImages(
          element.movie_id,
          element.language,
          element.include_image_language
        )
      ).toBe(answer);
    });
  });
  test('movie.GetKeywords', async () => {
    const parems = GetParams(movie_entry.GetKeywords);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/keywords',
        parems,
        element
      );
      expect(await movie_entry.GetKeywords(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetLists', async () => {
    const parems = GetParams(movie_entry.GetLists);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: 'en_US',
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/lists',
        parems,
        element
      );
      expect(
        await movie_entry.GetLists(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetRecommendations', async () => {
    const parems = GetParams(movie_entry.GetRecommendations);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: 'en_US',
        page: 654,
      },
      {
        movie_id: 5314,
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/recommendations',
        parems,
        element
      );
      expect(
        await movie_entry.GetRecommendations(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetReleaseDates', async () => {
    const parems = GetParams(movie_entry.GetReleaseDates);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/release_dates',
        parems,
        element
      );
      expect(await movie_entry.GetReleaseDates(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetReviews', async () => {
    const parems = GetParams(movie_entry.GetReviews);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: undefined,
        page: 654,
      },
      {
        movie_id: 51654,
        language: 'undefined',
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/reviews',
        parems,
        element
      );
      expect(
        await movie_entry.GetReviews(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetSimilar', async () => {
    const parems = GetParams(movie_entry.GetSimilar);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 51654,
        language: 'undefined',
        page: 654,
      },
      {
        movie_id: 51654,
        language: 'asdwfxghe',
        page: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/similar',
        parems,
        element
      );
      expect(
        await movie_entry.GetSimilar(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetTranslations', async () => {
    const parems = GetParams(movie_entry.GetTranslations);
    const cases = [
      {
        movie_id: 531846,
      },

      {
        movie_id: 51654,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/translations',
        parems,
        element
      );
      expect(await movie_entry.GetTranslations(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetVideos', async () => {
    const parems = GetParams(movie_entry.GetVideos);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 51654,
        language: 'asdwfxghe',
      },
      {
        movie_id: 51654,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/videos',
        parems,
        element
      );
      expect(
        await movie_entry.GetVideos(element.movie_id, element.language)
      ).toBe(answer);
    });
  });
  test('movie.GetWatchProviders', async () => {
    const parems = GetParams(movie_entry.GetWatchProviders);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/watch/providers',
        parems,
        element
      );
      expect(await movie_entry.GetWatchProviders(element.movie_id)).toBe(
        answer
      );
    });
  });
  test('movie.PostRateMovie', async () => {
    const parems = GetParams(movie_entry.PostRateMovie);
    const cases = [
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/rating',
        parems,
        element
      );
      expect(
        await movie_entry.PostRateMovie(
          element.movie_id,
          {},
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('movie.DeleteRating', async () => {
    const parems = GetParams(movie_entry.DeleteRating);
    const cases = [
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/rating',
        parems,
        element
      );
      expect(
        await movie_entry.DeleteRating(
          element.movie_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('movie.GetLatest', async () => {
    const parems = GetParams(movie_entry.GetLatest);
    const cases = [
      {
        language: 'string',
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'latest',
        parems,
        element
      );
      expect(await movie_entry.GetLatest(element.language)).toBe(answer);
    });
  });
  test('movie.GetNowPlaying', async () => {
    const parems = GetParams(movie_entry.GetNowPlaying);
    const cases = [
      {
        language: 'string',
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'now_playing',
        parems,
        element
      );
      expect(await movie_entry.GetNowPlaying(element.language)).toBe(answer);
    });
  });
  test('movie.GetPopular', async () => {
    const parems = GetParams(movie_entry.GetPopular);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'popular',
        parems,
        element
      );
      expect(
        await movie_entry.GetPopular(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('movie.GetTopRated', async () => {
    const parems = GetParams(movie_entry.GetTopRated);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'top_rated',
        parems,
        element
      );
      expect(
        await movie_entry.GetTopRated(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('movie.GetUpcoming', async () => {
    const parems = GetParams(movie_entry.GetUpcoming);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'upcoming',
        parems,
        element
      );
      expect(
        await movie_entry.GetUpcoming(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
});
