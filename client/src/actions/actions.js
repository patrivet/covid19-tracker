import * as actions from './actionTypes';
import config from '../config';

// API URLS
const COVID_DAILY_DATE_API = config.COVID_DAILY_DATE_API;
const COVID_GLOBAL_TOTALS_API = config.COVID_GLOBAL_TOTALS_API;
const COVID_COUNTRY_HISTORICAL_API = config.COVID_COUNTRY_HISTORICAL_API;
const COVID_COUNTRY_VACCINATIONS_API = config.COVID_COUNTRY_VACCINATIONS_API;
// UFN: Headers set to use 'cache-control' - no cache, so disk cache is not used.
const headers = {
  headers: {
    Accept: 'application/json',
    'cache-control': 'no-cache',
  },
};

// ACTIONS
export const setDataLoaded = payload => ({
  type: actions.SET_DATA_LOADED,
  payload,
});

export const incrementDataProcessed = payload => ({
  type: actions.INCREMENT_DATA_PROCESSED,
  payload,
});

export const setCountryTodayData = (countryCode, countryData) => ({
  type: actions.SET_COUNTRY_TODAY_DATA,
  payload: {
    countryCode,
    countryData,
  },
});

export const setCountryYesterdayData = (countryCode, countryData) => ({
  type: actions.SET_COUNTRY_YESTERDAY_DATA,
  payload: {
    countryCode,
    countryData,
  },
});

export const setGlobalData = (data, fetchYesterday) => ({
  type: actions.SET_GLOBAL_DATA,
  payload: {
    data,
    fetchYesterday,
  },
});

export const setUpdateTimestamp = payload => ({
  type: actions.SET_UPDATE_TIMESTAMP,
  payload,
});

export const setCountryName = (id, countryInfo) => ({
  type: actions.SET_COUNTRY_NAME,
  payload: {
    countryId: id,
    countryInfo,
  },
});

export const setSorting = payload => ({
  type: actions.SET_SORTING,
  payload,
});

export const toggleCountryToFavourites = payload => ({
  type: actions.TOGGLE_COUNTRY_TO_FAVOURITES,
  payload,
});

export const setDisplayMode = payload => ({
  type: actions.SET_DISPLAY_MODE,
  payload,
});

export const setSelectedCountry = payload => ({
  type: actions.SET_SELECTED_COUNTRY,
  payload,
});

export const setCountryHistoricalData = (countryCode, covidData) => ({
  type: actions.SET_COUNTRY_HISTORICAL_DATA,
  payload: {
    countryCode,
    covidData,
  },
});

export const setCountryVaccinationsData = (countryCode, covidData) => ({
  type: actions.SET_COUNTRY_VACCINATIONS_DATA,
  payload: {
    countryCode,
    covidData,
  },
});

export function setLoading(payload) {
  return {
    type: actions.SET_LOADING,
    payload,
  };
}

export function addAPIError(payload) {
  return {
    type: actions.ADD_API_ERROR,
    payload,
  };
}

export function setDarkMode(payload) {
  return {
    type: actions.SET_DARK_MODE,
    payload,
  };
}

function fetchFactory(url) {
  return fetch(url, headers)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
}

/* FETCH ACTION : Async data function */
// Global view country data
export function fetchCovidData(countryIso2, yesterdayFlag = false) {
  return function (dispatch) {
    // Substitute fetch date & country code into URL
    let url = COVID_DAILY_DATE_API.replace(
      '<YESTERDAY>',
      yesterdayFlag
    ).replace('<COUNTRY_CODE>', countryIso2);
    fetchFactory(url)
      .then(res => {
        if (!yesterdayFlag) {
          // Process data for Today's data
          dispatch(setCountryTodayData(countryIso2, res));
        } else {
          // Process Data for yesterday
          dispatch(setCountryYesterdayData(countryIso2, res));
        }
      })
      .finally(() => {
        dispatch(incrementDataProcessed('dataProcessed'));
      })
      .catch(err => {
        dispatch(addAPIError(err));
        console.error(`Error fetching GET to =${url} error =`);
        console.table(err);
      });
  };
}

export function fetchCovidGlobalData(yesterdayFlag = false) {
  return function (dispatch) {
    // Substitute fetch date into URL
    const url = COVID_GLOBAL_TOTALS_API.replace('<YESTERDAY>', yesterdayFlag);

    fetchFactory(url)
      .then(res => {
        // Process data for Today or yesterday's data
        dispatch(setGlobalData(res, yesterdayFlag));
      })
      .finally(() => {
        dispatch(incrementDataProcessed('dataProcessed'));
      })
      .catch(err => {
        dispatch(addAPIError(err));
        console.error(`Error fetching GET to =${url} error =`);
        console.table(err);
      });
  };
}

// Country drill view data.
export function fetchCountryData(countryCode) {
  return function (dispatch) {
    dispatch(setLoading(true));

    // Substitute fetch date into URL
    const url = COVID_COUNTRY_HISTORICAL_API.replace(
      '<COUNTRY_CODE>',
      countryCode
    );
    fetchFactory(url)
      .then(res => {
        dispatch(setCountryHistoricalData(countryCode, res));
      })
      .finally(() => {
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(addAPIError(err));
        console.error(`Error fetching GET to =${url} error =`);
        console.table(err);
      });
  };
}

export const fetchCountryVaccinations = (countryCode) => {
  return function (dispatch) {
    dispatch(setLoading(true));
    const url = COVID_COUNTRY_VACCINATIONS_API.replace(
      '<COUNTRY_CODE>',
      countryCode
    );
    fetchFactory(url)
      .then(res => {
        dispatch(setCountryVaccinationsData(countryCode, res));
      })
      .finally(() => {
        dispatch(incrementDataProcessed('dataProcessed'));
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(addAPIError(err));
      });
  };
}
