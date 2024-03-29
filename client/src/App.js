import React from 'react';
import './App.css';
import {
  fetchCovidData,
  fetchCountryVaccinations,
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
// Utils
import { toggleDarkMode } from './utils/helperFunctions';
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
  const darkMode = useSelector(store => store.darkMode);
  const dataProcessedCount = (countries.length * 2) + 2 // Data processed count represents seperate API calls: countries*2 for -i)Today covid main data ii) yesterday main covid data. + 2 for 2 global data API calls.
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

    // Get Vaccinations data -for today.
    // ! Turned off until know the data API is working.
    // countries.forEach(country => {
    //   store.dispatch(fetchCountryVaccinations(country.ISO2));
    // });

    store.dispatch(setUpdateTimestamp(DateTime.local()));

    // Set the initial dark/light mode.
    toggleDarkMode(darkMode)
  }, []);

  React.useEffect(() => {
    if (dataProcessed >= dataProcessedCount)
      store.dispatch(setDataLoaded(true));
  }, [dataProcessed]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              {/* Show spinner until data processed count matches global stats x2 and countries x2. */}
              {dataProcessed < dataProcessedCount ? (
                <Spinner />
              ) : (
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              )}
            </>
          )}
        />
        <Route path='/country/:id' component={CountryDrillView} />
      </Switch>
      <ScrollToTop smooth className='App_scrollToTop' />
    </BrowserRouter>
  );
}

export default App;
