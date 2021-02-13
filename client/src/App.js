import React from 'react';
import './App.css';
import {
  fetchCovidData,
  fetchCovidGlobalData,
  setUpdateTimestamp,
  setDataLoaded,
} from './actions/actions';
import { useSelector } from 'react-redux';
import ScrollToTop from 'react-scroll-to-top';
import { DateTime } from 'luxon';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Custom components
import CountryDrillView from './components/CountryDrillView';
import Main from './components/Main';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';

// Fontawesome iconStyle
import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';
library.add(
  fas.faBookmark,
  far.faBookmark,
  fas.faGlasses,
  fas.faBookOpen,
  fas.faAngleLeft,
  fas.faVirus
);

function App() {
  const countries = useSelector(store => store.countries);
  let dataProcessed = useSelector(store => store.dataProcessed);
  const dataLoadingErrors = useSelector(store => store.dataLoadingErrors);

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

  React.useEffect(() => {
    if (dataProcessed >= countries.length * 2 + 2)
      store.dispatch(setDataLoaded(true));
  }, [dataProcessed]);

  const errors = () => {
    console.log(dataLoadingErrors);
    return false;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              {/* Show spinner until data processed count matches global stats x2 and countries x2. */}
              {dataProcessed < countries.length * 2 + 2 ? (
                <Spinner />
              ) : (
                <>
                  <Header />
                  <Main />
                </>
              )}
            </>
          )}
        />
        <Route path='/country/:id' component={CountryDrillView} />
      </Switch>
      <ScrollToTop smooth className='App_scrollToTop' />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
