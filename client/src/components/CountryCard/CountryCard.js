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
          <DeathsTotal totalDeaths={country.todayData.deaths} />
          <CasesYesterday yesterdayCases={country.yesterdayData.todayCases} />
          <DeathsYesterday
            yesterdayDeaths={country.yesterdayData.todayDeaths}
          />
          <CasesTotal totalCases={country.todayData.cases} />
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
