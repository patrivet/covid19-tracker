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
      <div className="CountryCard__StatsContainer">
        <CovidDailyCases todayCases={country.todayData.todayCases} yesterdayCases={country.yesterdayData.todayCases}/>
        {/* <CovidDailyDeaths dailyDeaths={country.todayData.todayDeaths} />
        <CovidTotalCases totalCases={country.totalCases} />*/}
        <CovidTotalCases totalCases={country.todayData.cases} />
      </div>
    </>
  );
};

export default CountryCard;
