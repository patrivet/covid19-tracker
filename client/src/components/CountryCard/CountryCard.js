import React from 'react';
import { Link } from 'react-router-dom';

import './CountryCard.css';

// Custom components
import CountryHeader from '../CountryHeader';
import DeathsToday from '../DeathsToday';
import CasesTotal from '../CasesTotal';
import CasesToday from '../CasesToday';
import DeathsTotal from '../DeathsTotal';
import CasesLabel from '../CasesLabel';
import DeathsLabel from '../DeathsLabel';
import CasesYesterday from '../CasesYesterday';
import DeathsYesterday from '../DeathsYesterday';

const CountryCard = ({ country }) => {
  const linkContent = {
    pathname: `country/${country.ISO2}`,
    state: country,
  };

  return (
    <div className='CountryCard'>
      <Link to={linkContent}>
        <CountryHeader name={country.name} countryCode={country.ISO2} />
      </Link>
      <div className='CountryCard__statsContainer'>
        <CasesLabel />
        <DeathsLabel />
        <CasesToday
          todayCases={country.todayData.todayCases}
          yesterdayCases={country.yesterdayData.todayCases}
        />
        <DeathsToday
          todayDeaths={country.todayData.todayDeaths}
          yesterdayDeaths={country.yesterdayData.todayDeaths}
        />
        <DeathsTotal totalDeaths={country.todayData.deaths} />
        <CasesYesterday yesterdayCases={country.yesterdayData.todayCases} />
        <DeathsYesterday yesterdayDeaths={country.yesterdayData.todayDeaths} />
        <CasesTotal totalCases={country.todayData.cases} />
      </div>
    </div>
  );
};

export default CountryCard;
