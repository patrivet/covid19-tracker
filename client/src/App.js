import React from 'react';
import './App.css';
import store from './store';
import {
  fetchCovidData,
  fetchCovidGlobalData,
  setUpdateTimestamp,
} from './actions/actions';
import { useSelector } from 'react-redux';
import ScrollToTop from 'react-scroll-to-top';
import { DateTime } from 'luxon';

// Custom components
import GlobalCard from './components/GlobalCard';
import CountriesList from './components/CountriesList';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';

// Fontawesome iconStyle
import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';
library.add(fas.faBookmark, far.faBookmark, fas.faGlasses);

function App() {
  const countries = useSelector(store => store.countries);
  let dataProcessed = useSelector(store => store.dataProcessed);

  React.useEffect(() => {
    // Get Global stats data for today
    let fetchToday = true;
    store.dispatch(fetchCovidGlobalData(fetchToday));
    // Get Global stats data for yesterday
    store.dispatch(fetchCovidGlobalData(!fetchToday));

    // Get data for today
    countries.forEach(country => {
      store.dispatch(fetchCovidData(country.ISO2));
    });

    // Get data for yesterday
    countries.forEach(country => {
      store.dispatch(fetchCovidData(country.ISO2, true));
    });

    store.dispatch(setUpdateTimestamp(DateTime.local()));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* Show spinner until data processed count matches global stats x2 and countries x2. */}
        <div>
          {dataProcessed < countries.length * 2 + 2 ? (
            <Spinner />
          ) : (
            <>
              <Header />
              <GlobalCard />
              <CountriesList />
              <ScrollToTop smooth className='App_scrollToTop' />
              <Footer />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
