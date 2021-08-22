import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

// Custom components
import CountryHeader from '../CountryHeader';
import DeathsToday from '../DeathsToday';
import StatsTotal from '../StatsTotal';
import CasesToday from '../CasesToday';
import CasesLabel from '../CasesLabel';
import DeathsLabel from '../DeathsLabel';
import CasesYesterday from '../CasesYesterday';
import DeathsYesterday from '../DeathsYesterday';
import { setSelectedCountry } from '../../actions/actions';
import store from '../../store';

const CountryCard = ({ country }) => {

  /* Default values to null */
  let todayCases = null;
  let todayDeaths = null;
  let yesterdayCases = null;
  let yesterdayDeaths = null;
  let totalCases = null;
  let totalDeaths = null;
  let casesPerOneMillion = null;
  let deathsPerOneMillion = null;

  /* replace null vlauee if there's today & yday data */
  if (country.todayData) {
    todayCases = country.todayData.todayCases;
    todayDeaths = country.todayData.todayDeaths;
    totalCases = country.todayData.cases;
    totalDeaths = country.todayData.deaths;
    casesPerOneMillion = country.todayData.casesPerOneMillion;
    deathsPerOneMillion = country.todayData.deathsPerOneMillion
  }

  if (country.yesterdayData) {
    yesterdayCases = country.yesterdayData.todayCases;
    yesterdayDeaths = country.yesterdayData.todayDeaths;
  }

  const linkContent = {
    pathname: `country/${country.ISO2}`,
    // pass the country as state for the link
    state: country,
  };

  const handleSetCountry = () => {
    store.dispatch(
      setSelectedCountry({
        name: country.name,
        countryCode: country.ISO2,
      })
    );
  };

  return (
    <div className='CountryCard'>
      <CountryHeader country={country} />
      <Link to={linkContent} onClick={handleSetCountry}>
        <div className='CountryCard__statsContainer'>
          <CasesLabel />
          <DeathsLabel />
          <CasesToday
            todayCases={todayCases}
            yesterdayCases={yesterdayCases}
          />
          <DeathsToday
            todayDeaths={todayDeaths}
            yesterdayDeaths={yesterdayDeaths}
          />
          <StatsTotal label="Total" value={totalCases} className='cases'  />
          <StatsTotal label="Total" value={totalDeaths} className='deaths' />

          <CasesYesterday yesterdayCases={yesterdayCases} />
          <DeathsYesterday
            yesterdayDeaths={yesterdayDeaths}
          />
          <StatsTotal label="Per 1M" value={casesPerOneMillion} className='deaths' containerClassName='deaths--perMillion' />
          <StatsTotal label="Per 1M" value={deathsPerOneMillion} className='cases'  containerClassName='cases--perMillion'/>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
