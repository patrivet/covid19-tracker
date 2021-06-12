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
    // Filter countries to exclude -where the curernt sort is today cases or today deaths - those who have a null value, for those respective stats.
    let countriesToSort = [];
    let excludedFromSort = [];
    const currentSortVal = sortOption.sortVal;
    countriesIn.forEach( nextCountry => {
      if (currentSortVal === 'todayData.todayCases'&& !nextCountry.todayData.todayCases) {
        excludedFromSort.push(nextCountry);
        return;
      }
      if (currentSortVal === 'todayData.todayDeaths'&& !nextCountry.todayData.todayDeaths) {
        excludedFromSort.push(nextCountry);
        return;
      }
      return countriesToSort.push(nextCountry);
    });
    // Order the included countries & add the excluded Countries to the end of the array
    countriesToSort = orderBy(countriesToSort, [sortOption.sortVal], [sortOption.direction])
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
