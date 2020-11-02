import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard';
import './CountriesList.css';
let nextId = 0;

const CountriesList = () => {

  const countries = useSelector(store => store.countries);
  return (
    countries.map(country => {
      return <CountryCard key={nextId++} country={country} />
    })
  );
};

export default CountriesList;
