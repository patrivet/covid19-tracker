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

  return (
    <div className='countriesList'>
      {orderBy(countries, [sortOption.sortVal], [sortOption.direction]).map(
        country => {
          return <CountryCard key={country.ISO2} country={country} />;
        }
      )}
    </div>
  );
};

export default CountriesList;
