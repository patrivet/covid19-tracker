import countries_data from '../utils/countriesData';
import * as actions from '../actions/actionTypes';

const initalState = {
  sorting: '',
  search: '',
  chartPeriod: 'Last 7 Days',
  countries: countries_data.countries, // this is an []
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case actions.SET_COUNTRY_NAME:
      return {
        ...state,
        // Find the country whose code matches payload.countryId
        countries:
          state.countries.map( country => country.countryCode === action.payload.countryId ? (country.name = action.payload.countryInfo[0].info.title, country) : country )
        }
    case actions.SET_COUNTRY_DATA:
      return {
        ...state,
        countries:
          state.countries.map( country => country.countryCode === action.payload.countryId ? (country.covidData = action.payload.countryData, country) : country )
        }
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state;
  }
}