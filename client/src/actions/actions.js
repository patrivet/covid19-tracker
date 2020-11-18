import * as actions from './actionTypes';
import config from '../config';

// API URLS
const COVID_DAILY_DATE_API = config.COVID_DAILY_DATE_API;
// Un-used for now.
// const COVID_HISTORICAL_DATE_API = config.COVID_DAILY_DATE_API;

// ACTIONS
export const setDataLoaded = (payload) => ({
	type: actions.SET_DATA_LOADED,
	payload,
});

export const incrementCountryCount = () => ({
	type: actions.INCREMENT_COUNTRY_COUNT,
});

export const setCountryTodayData = (countryCode, countryData) => ({
	type: actions.SET_COUNTRY_TODAY_DATA,
	payload: {
		countryCode,
		countryData
	},
})

export const setCountryYesterdayData = (countryCode, countryData) => ({
	type: actions.SET_COUNTRY_YESTERDAY_DATA,
	payload: {
		countryCode,
		countryData
	},
})

export const setCountryName = (id, countryInfo) => ({
	type: actions.SET_COUNTRY_NAME,
	payload: {
		countryId: id,
		countryInfo
	},
})

export const setCountryDailyCases = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_DAILY_CASES,
	payload: {
		countryCode,
		covidData
	},
})

export const setCountryDailyDeaths = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_DAILY_DEATHS,
	payload: {
		countryCode,
		covidData
	},
})

export const setCountryTotalCases = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_TOTAL_CASES,
	payload: {
		countryCode,
		covidData
	},
})

export const setCountryTotalDeaths = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_TOTAL_DEATHS,
	payload: {
		countryCode,
		covidData
	},
})

export const setCountryCasesDelta = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_CASES_DELTA,
	payload: {
		countryCode,
		covidData
	},
})

export const setCountryDeathsDelta = (countryCode, covidData) => ({
	type: actions.SET_COUNTRY_DEATHS_DELTA,
	payload: {
		countryCode,
		covidData
	},
})

/* Other actions to be placed here.. */

/* FETCH ACTION : Async data function */
export function fetchCovidData (countryIso2, yesterdayFlag = false) {
	return function (dispatch) {

		// Substitute fetch date & country code into URL
		let url = COVID_DAILY_DATE_API.replace('<YESTERDAY>', yesterdayFlag).replace('<COUNTRY_CODE>', countryIso2);

		const headers = { headers : { Accept: 'application/json', 'cache-control': 'no-cache' }};
		fetch(url, headers)
			.then( (res) => (res.ok ? res : Promise.reject(res)))
			.then( (res) => res.json())
			.then( (res) => {

				if (!yesterdayFlag) {
					// Process data for Today's data
					dispatch(setCountryTodayData(countryIso2, res));
					// dispatch(setCountryDailyCases(countryIso2, res));
					// dispatch(setCountryDailyDeaths(countryIso2, res));
					// dispatch(setCountryTotalCases(countryIso2, res));
					// dispatch(setCountryTotalDeaths(countryIso2, res));
				} else {
					// Process Data for yesterday
					dispatch(setCountryYesterdayData(countryIso2, res));
					// dispatch(setCountryCasesDelta(countryIso2, res));
					// dispatch(setCountryDeathsDelta(countryIso2, res));
				}
			}).finally(() => {
				//dispatch(setDataLoaded(true));
				dispatch(incrementCountryCount());

			}).catch( (err) => {
				console.error(`Error fetching GET to =${url} error =${err}`)
			})
	}
}