import React from 'react';
import './CountryCard.css';
import CountryHeader from '../CountryHeader';
import CovidDailyCases from '../CovidDailyCases';
import CovidDailyDeaths from '../CovidDailyDeaths';
import CovidTotalCases from '../CovidTotalCases';
import CovidTotalDeaths from '../CovidTotalDeaths';

const CountryCard = ({country}) => {
  return (
    <div className="CountryCard">
      <CountryHeader name={country.name} countryCode={country.ISO2}/>
      <div className="CountryCard__statsContainer">
        <CovidDailyCases todayCases={country.todayData.todayCases} yesterdayCases={country.yesterdayData.todayCases}/>
        <CovidDailyDeaths todayDeaths={country.todayData.todayDeaths}  yesterdayDeaths={country.yesterdayData.todayDeaths} />
        <CovidTotalDeaths totalDeaths={country.todayData.deaths} />
        <CovidTotalCases totalCases={country.todayData.cases} />
      </div>
    </div>
  );
};

export default CountryCard;
