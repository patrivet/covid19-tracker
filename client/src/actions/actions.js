import * as actions from './actionTypes';

export const setLoading = (payload) => ({
	type: actions.SET_LOADING,
	payload,
});

export const setCountryData = (id, countryData) => ({
	type: actions.SET_COUNTRY_DATA,
	payload: {
		countryId: id,
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

/* Async fetch data function */
export function fetchCountryCovidData (countryCode) {
	return function (dispatch) {
		const BASE_URL = 'https://api.thevirustracker.com/free-api';
		/* Toggle state fetching data flag */
		dispatch(setLoading(true));
		const url = `${BASE_URL}?countryTimeline=${countryCode}`;
		fetch(url, {
			headers : { Accept: 'application/json' }
		})
			.then( (res) => (res.ok ? res : Promise.reject(res)))
			.then( (res) => {  console.log(typeof res); return res; })
			.then( (res) => res.json())
			.then( (res) => {
				let countryId = res.countrytimelinedata[0].info.code;
				dispatch(setCountryName(countryId, res.countrytimelinedata));
				dispatch(setCountryData(countryId, res.timelineitems));
			}).finally(() => {
				dispatch(setLoading(false))
			}).catch( (err) => {
				console.error(`Error fetching GET to =${url} error =${err}`)
			})
	}
}