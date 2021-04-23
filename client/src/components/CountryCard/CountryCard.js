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
            todayCases={country.todayData.todayCases}
            yesterdayCases={country.yesterdayData.todayCases}
          />
          <DeathsToday
            todayDeaths={country.todayData.todayDeaths}
            yesterdayDeaths={country.yesterdayData.todayDeaths}
          />
          <StatsTotal label="Total" value={country.todayData.cases} className='cases'  />
          <StatsTotal label="Total" value={country.todayData.deaths} className='deaths' />

          <CasesYesterday yesterdayCases={country.yesterdayData.todayCases} />
          <DeathsYesterday
            yesterdayDeaths={country.yesterdayData.todayDeaths}
          />
          <StatsTotal label="Per 1M" value={country.todayData.deathsPerOneMillion} className='deaths' containerClassName='deaths--perMillion' />
          <StatsTotal label="Per 1M" value={country.todayData.casesPerOneMillion} className='cases'  containerClassName='cases--perMillion'/>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
