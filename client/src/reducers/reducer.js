import countries_data from '../utils/countriesData';
import * as actions from '../actions/actionTypes';
import { DateTime } from 'luxon';
import * as helperFunctions from '../utils/helperFunctions';

const initalState = {
  sorting: { label: 'Name (Ascending)', sortVal: 'name', direction: 'asc' },
  search: '',
  chartPeriod: 'Last 7 Days',
  globalStats: {
    todayData: {},
    yesterdayData: {},
  },
  countries: countries_data.countries, // this is an []
  favouriteCountries: [],
  dataLoaded: false,
  dataProcessed: 0,
  updated: '',
  displayMode: 'All countries', // Default display mode: All Countries.
};

export default function (state = initalState, action) {
  switch (action.type) {
    case actions.SET_COUNTRY_TODAY_DATA:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.todayData = action.payload.countryData), country)
            : country
        ),
      };

    case actions.SET_COUNTRY_YESTERDAY_DATA:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.yesterdayData = action.payload.countryData), country)
            : country
        ),
      };

    case actions.SET_GLOBAL_DATA:
      // Determine if today or yesterday data- and add to the applicable prop.
      const propName = action.payload.fetchYesterday
        ? 'yesterdayData'
        : 'todayData';
      return {
        ...state,
        globalStats: {
          ...state.globalStats,
          [propName]: action.payload.data,
        },
      };

    case actions.SET_COUNTRY_DAILY_CASES:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.dailyCases = action.payload.covidData.todayCases),
              country)
            : country
        ),
      };

    case actions.SET_COUNTRY_DAILY_DEATHS:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.dailyDeaths = action.payload.covidData.todayDeaths),
              country)
            : country
        ),
      };

    case actions.SET_COUNTRY_TOTAL_CASES:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.totalCases = action.payload.covidData.cases), country)
            : country
        ),
      };

    case actions.SET_COUNTRY_TOTAL_DEATHS:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.totalDeaths = action.payload.covidData.deaths), country)
            : country
        ),
      };

    case actions.SET_COUNTRY_CASES_DELTA:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.yesterdayCases = action.payload.covidData.todayCases),
              country)
            : country
        ),
      };

    case actions.SET_COUNTRY_DEATHS_DELTA:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? ((country.yesterdayDeaths = action.payload.covidData.todayDeaths),
              country)
            : country
        ),
      };

    case actions.SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload,
      };

    case actions.INCREMENT_DATA_PROCESSED:
      return {
        ...state,
        dataProcessed: ++state.dataProcessed,
      };

    case actions.SET_UPDATE_TIMESTAMP:
      return {
        ...state,
        updated: action.payload.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
      };

    case actions.SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };

    case actions.SET_COUNTRY_BOOKMARKS:
      return {
        ...state,
        favouriteCountries: action.payload,
      };

    case actions.TOGGLE_COUNTRY_TO_FAVOURITES:
      // Check if country is in favs
      const favIndex = state.favouriteCountries.indexOf(action.payload);
      let favsCopy = [...state.favouriteCountries];
      // Add or remove country from favsCopy.
      favIndex === -1
        ? favsCopy.push(action.payload) // country is not fav so add
        : favsCopy.splice(favIndex, 1); // country already a fav - so remove

      // Update list in local storage
      helperFunctions.addFavsToLocalStorage(favsCopy);

      return {
        ...state,
        favouriteCountries: favsCopy,
      };

    case actions.SET_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload,
      };

    default:
      return state;
  }
}
