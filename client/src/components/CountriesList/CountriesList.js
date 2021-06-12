import React from 'react';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';

import './CountriesList.css';
import CountryCard from '../CountryCard';

const CountriesList = () => {
  let countries = useSelector(store => store.countries);
  const sortOption = useSelector(store => store.sorting);
  const displayMode = useSelector(store => store.displayMode);
  const favCountriesStrArr = useSelector(store => store.favouriteCountries);

  // DisplayMode handling.
  //  (i) Get the fav countries if display mode is 'Bookmarked countries'
  if (displayMode === 'Bookmarked countries') {
    /* Filter master countries array for bookmarked countries. */
    countries = countries.filter(ctry =>
      favCountriesStrArr.includes(ctry.ISO2)
    );
  } else if (displayMode !== 'All countries') {
    /* Filter countries by selected continent */
    const selectedContinent = displayMode;
    countries = countries.filter(ctry =>
      ctry.continent === selectedContinent
    );
  }

  const applySort = (countriesIn) => {
    // if the sortVal is todaydata - cases or deaths-
    // i) remove the values with null ii) apply sort & add the null values back to the end of the array.
    let countriesToSort = [];
    let excludedFromSort = [];
    const currentSortVal = sortOption.sortVal;

    // Filter countries array to exclude those with a null value for today's cases or today's deaths.
    const sortIsTodayCases = currentSortVal === 'todayData.todayCases';
    const sortIsTodayDeaths = currentSortVal === 'todayData.todayDeaths';

    countriesIn.forEach( nextCountry => {
      if (sortIsTodayCases && !nextCountry.todayData.todayCases) {
        excludedFromSort.push(nextCountry);
        return;
      }
      if (sortIsTodayDeaths && !nextCountry.todayData.todayDeaths) {
        excludedFromSort.push(nextCountry);
        return;
      }
      // Add the country so included for sorting array
      return countriesToSort.push(nextCountry);
    }, [])
    // Order the included countries
    countriesToSort = orderBy(countriesToSort, [sortOption.sortVal], [sortOption.direction])
    // add the excluded Countries to the end of the array
    return [...countriesToSort, ...excludedFromSort]
  }

  return (
    <div className='countriesList'>
      {applySort(countries).map(
        country => {
          return <CountryCard key={country.ISO2} country={country} />;
        }
      )}
    </div>
  );
};

export default CountriesList;
