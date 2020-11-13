import React from 'react';
import CountryHeader from '../CountryHeader';
import CovidDailyCases from '../CovidDailyCases';
import CovidDailyDeaths from '../CovidDailyDeaths';
import CovidTotalCases from '../CovidTotalCases';
import CovidTotalDeaths from '../CovidTotalDeaths';


const CountryCard = ({country}) => {


  return (
    <>
      <CountryHeader name={country.name} countryCode={country.ISO2}/>

    </>
  );
};

export default CountryCard;
