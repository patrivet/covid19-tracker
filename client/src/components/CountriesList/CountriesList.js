import React from 'react';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';

import './CountriesList.css';
import CountryCard from '../CountryCard';

const CountriesList = () => {
  const countries = useSelector(store => store.countries);
  const sortOption = useSelector(store => store.sorting);
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
