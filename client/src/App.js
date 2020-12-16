import React from 'react';
import './App.css';
import store from './store';
import { fetchCovidData, fetchCovidGlobalData } from './actions/actions';
import { useSelector } from 'react-redux';
import CountriesList from './components/CountriesList';
import Spinner from './components/Spinner';

function App() {
  const countries = useSelector(store => store.countries);
  let dataProcessed = useSelector(store => store.dataProcessed);

  React.useEffect(() => {
    // Get Global stats data for today
    store.dispatch(fetchCovidGlobalData(true));
    // Get Global stats data for yesterday
    store.dispatch(fetchCovidGlobalData(false));

    // Get data for today
    countries.forEach(country => {
      store.dispatch(fetchCovidData(country.ISO2));
    });

    // Get data for yesterday
    countries.forEach(country => {
      store.dispatch(fetchCovidData(country.ISO2, true));
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* Show spinner until data processed count matches global stats x2 and countries x2. */}
        <div>
          {dataProcessed < countries.length * 2 + 2 ? (
            <Spinner />
          ) : (
            <CountriesList />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
