import React from 'react';
import { useSelector } from 'react-redux';
import './Main.css';

// Custom components
import GlobalCard from '../GlobalCard';
import CountriesList from '../CountriesList';
import CovidImg from '../../assets/imgs/coronavirus-sars-mers-flu-virus-influenza.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  const globalStats = useSelector(store => store.globalStats);

  const displayMode =
  useSelector(store => store.displayMode);

  const showingGlobal =
  useSelector(store => store.displayMode) === 'All countries';

  return (
    <>
      {/* Show messsage if data not set on globalStats */}
      {!globalStats.todayData ? (
        <div className='error__title'>
          <h3>An unknown issue occured retrieving Covid-19 data.</h3>
          <h4>Please refresh the screen to try again.</h4>
        </div>
      ) : (
        <>
          <GlobalCard />
          <div className='App__mainViewTitle'>
          {!showingGlobal ? (
            <>
              <img src={CovidImg} className='App__mainViewImg' style={{ height: '25px'}} />
              <p className='App__mainViewText'>{displayMode}</p>
            </>
          ) : null}
          </div>
          <CountriesList />
        </>
      )}
    </>
  );
};

export default Main;
