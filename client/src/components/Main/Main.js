import React from 'react';
import { useSelector } from 'react-redux';
import './Main.css';

// Custom components
import GlobalCard from '../GlobalCard';
import CountriesList from '../CountriesList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  const globalStats = useSelector(store => store.globalStats);

  const areBookmarksShown =
    useSelector(store => store.displayMode) === 'Bookmarked countries';
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
          <div className='App__bookmarkTitle'>
            {areBookmarksShown ? (
              <>
                <FontAwesomeIcon
                  icon={['fas', 'book-open']}
                  className='App__bookmarkImg'
                />
                <p className='App__bookmarkText'>bookmarked countries</p>
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
