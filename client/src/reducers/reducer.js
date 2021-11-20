import countries_data from '../utils/countriesData';
import * as actions from '../actions/actionTypes';
import { DateTime } from 'luxon';
import * as helperFunctions from '../utils/helperFunctions';

const getLocalStorageJSONProp = propName => {
  const localProp = JSON.parse(localStorage.getItem(propName));
  return localProp ? localProp : null;
};

const initalState = {
  // Get the last set sorting setting (from local store) - or use default.
  sorting: getLocalStorageJSONProp('sortingSetting') || {
    label: 'Name (Ascending)',
    sortVal: 'name',
    direction: 'asc',
  },
  search: '',
  chartPeriod: 'Last 7 Days',
  globalStats: {
    // todayData: {},
    // yesterdayData: {},
  },
  countries: countries_data.countries, // this is an []
  favouriteCountries: getLocalStorageJSONProp('bookmarks') || [], // Get local storage bookmarked countries. Returns a non null array or just null.
  dataLoaded: false,
  dataProcessed: 0,
  loading: false,
  updated: '',
  displayMode: getLocalStorageJSONProp('displayMode') || 'All countries', // Get the last set display mode (from local store) - or use default.
  selectedCountry: null, // When set, is an Object with countryCode and name of selected country
  dataLoadingErrors: [], // Holds array of possible exceptions thrown during REST calls.
  darkMode: getLocalStorageJSONProp('darkMode') || false,
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

    case actions.SET_COUNTRY_HISTORICAL_DATA:
      // Extract the data into props
      let { cases, deaths, recovered } = action.payload.covidData.timeline;

      // Convert to arrays;
      cases = Object.entries(cases);
      deaths = Object.entries(deaths);
      recovered = Object.entries(recovered);

      // Convert date string inside data to timestamp:
      cases = helperFunctions.convertArrayDates(cases);
      deaths = helperFunctions.convertArrayDates(deaths);
      recovered = helperFunctions.convertArrayDates(recovered);

      const updateCountryWithData = country => {
        country.allCasesCumulative = cases;
        country.allDeathsCumulative = deaths;
        country.allRecoveredCumulative = recovered;
        country.allCasesDaily = helperFunctions.generateDailyStats(cases);
        country.allDeathsDaily = helperFunctions.generateDailyStats(deaths);
        country.allRecoveredDaily = helperFunctions.generateDailyStats(
          recovered
        );
        return country;
      };

      return {
        ...state,
        countries: state.countries.map(country =>
          country.ISO2 === action.payload.countryCode
            ? updateCountryWithData(country)
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

    case actions.SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload,
      };

    case actions.INCREMENT_DATA_PROCESSED:
      // Increments the passed prop name (held in the redux store)
      const propToIncrement = action.payload;
      return {
        ...state,
        [propToIncrement]: ++state[propToIncrement],
      };

    case actions.SET_UPDATE_TIMESTAMP:
      return {
        ...state,
        updated: action.payload.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
      };

    case actions.SET_SORTING:
      // Update list in local storage
      helperFunctions.addToLocalStorageAsJSON('sortingSetting', action.payload);
      return {
        ...state,
        sorting: action.payload,
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
      helperFunctions.addToLocalStorageAsJSON('bookmarks', favsCopy);

      return {
        ...state,
        favouriteCountries: favsCopy,
      };

    case actions.SET_DISPLAY_MODE:
      // Update list in local storage
      helperFunctions.addToLocalStorageAsJSON('displayMode', action.payload);
      return {
        ...state,
        displayMode: action.payload,
      };

    case actions.SET_SELECTED_COUNTRY:
      // ! TEMP functionality - set country in local store. (so can restore selected country when lost of page refresh in country drill view)
      // let val = action.payload ? action.payload.countryCode : null;
      // helperFunctions.addToLocalStorageAsJSON('selectedCountry', val);

      return {
        ...state,
        selectedCountry: action.payload,
      };

    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.ADD_API_ERROR:
      return {
        ...state,
        dataLoadingErrors: [...state.dataLoadingErrors, action.payload],
      };

    case actions.SET_DARK_MODE:
      helperFunctions.addToLocalStorageAsJSON('darkMode', action.payload);
      return {
        ...state,
        darkMode: action.payload,
      };

    default:
      return state;
  }
}
