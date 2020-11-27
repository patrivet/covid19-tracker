import React from 'react';
import './CountryCard.css';
import CountryHeader from '../CountryHeader';
import CovidDailyDeaths from '../CovidDailyDeaths';
import CovidTotalCases from '../CovidTotalCases';
import CovidDailyCases from '../CovidDailyCases';
import CovidTotalDeaths from '../CovidTotalDeaths';
import CovidCasesLabel from '../CovidCasesLabel';
import CovidDeathsLabel from '../CovidDeathsLabel';
import CovidYesterdayCases from '../CovidYesterdayCases';
import CovidYesterdayDeaths from '../CovidYesterdayDeaths';

const CountryCard = ({ country }) => {
  return (
    <div className="CountryCard">
      <CountryHeader name={country.name} countryCode={country.ISO2} />
      <div className="CountryCard__statsContainer">
        <CovidCasesLabel />
        <CovidDeathsLabel />
        <CovidDailyCases
          todayCases={country.todayData.todayCases}
          yesterdayCases={country.yesterdayData.todayCases}
        />
        <CovidDailyDeaths
          todayDeaths={country.todayData.todayDeaths}
          yesterdayDeaths={country.yesterdayData.todayDeaths}
        />
        <CovidTotalDeaths totalDeaths={country.todayData.deaths} />
        <CovidYesterdayCases
          yesterdayCases={country.yesterdayData.todayCases}
        />
        <CovidYesterdayDeaths
          yesterdayDeaths={country.yesterdayData.todayDeaths}
        />
        <CovidTotalCases totalCases={country.todayData.cases} />
      </div>
    </div>
  );
};

export default CountryCard;
