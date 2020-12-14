import React from 'react';
import './App.css';
import store from './store';
import { fetchCovidData } from './actions/actions';
import { useSelector } from 'react-redux';
import CountriesList from './components/CountriesList';
import Spinner from './components/Spinner';

function App() {
  const countries = useSelector(store => store.countries);
  let countriesProcessed = useSelector(store => store.countriesProcessed);

  React.useEffect(() => {
    // Get data for today.
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
        <h4>Covid-19 Global Tracker</h4>
        {/* Show spinner until countries processed is twice  */}
        <div>
          {countriesProcessed < countries.length * 2 ? (
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
