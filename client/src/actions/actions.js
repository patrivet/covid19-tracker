import * as actions from './actionTypes';
import config from '../config';

// API URLS
const COVID_DAILY_DATE_API = config.COVID_DAILY_DATE_API;
const COVID_HISTORICAL_DATE_API = config.COVID_DAILY_DATE_API;

// ACTIONS
export const setDataLoaded = (payload) => ({
	type: actions.SET_DATA_LOADED,
	payload,
});

export const incrementCountryCount = () => ({
	type: actions.INCREMENT_COUNTRY_COUNT,
});

export const setCountryData = (countryCode, countryData) => ({
	type: actions.SET_COUNTRY_DATA,
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

export const setCountryDailyCases = (payload) => ({
	type: actions.SET_COUNTRY_DAILY_CASES,
	payload,
})

export const setCountryDailyDeaths = (payload) => ({
	type: actions.SET_COUNTRY_DAILY_DEATHS,
	payload,
})

export const setCountryTotalCases = (payload) => ({
	type: actions.SET_COUNTRY_TOTAL_CASES,
	payload,
})

export const setCountryTotalDeaths = (payload) => ({
	type: actions.SET_COUNTRY_TOTAL_DEATHS,
	payload,
})

/* Other actions to be placed here.. */

/* FETCH ACTION : Async data function */
export function fetchCovidData (countryIso2, yesterdayFlag = false) {
	return function (dispatch) {

		// Substitute fetch date & country code into URL
		let url = COVID_DAILY_DATE_API.replace('<YESTERDAY>', yesterdayFlag).replace('<COUNTRY_CODE>', countryIso2);

		const headers = { headers : { Accept: 'application/json' }};
		fetch(url, headers)
			.then( (res) => (res.ok ? res : Promise.reject(res)))
			.then( (res) => res.json())
			.then( (res) => {
				/* FIX ME: set multiple Country fields via N actions here
				but for testing - use just ONE action for now. */
				dispatch(setCountryData(countryIso2, res));
			}).finally(() => {
				//dispatch(setDataLoaded(true));
				dispatch(incrementCountryCount());

			}).catch( (err) => {
				console.error(`Error fetching GET to =${url} error =${err}`)
			})
	}
}