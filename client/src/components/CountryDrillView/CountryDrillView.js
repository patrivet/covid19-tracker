import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

// components
import CountryDrillHeader from '../CountryDrillHeader';
import Spinner from '../Spinner';
import store from '../../store';
import { fetchCountryData, setUpdateTimestamp } from '../../actions/actions';

const CountryDrillView = props => {
  // get the country passed into props-state from the link
  const country = props.location.state;
  // ! FIX ME - handle if country is null - show message sthing like: -No country to display ..click >here< to return to /

  const loading = useSelector(store => store.loading);

  // On component load, get country historical stats.
  useEffect(() => {
    store.dispatch(fetchCountryData(country.ISO2));
    store.dispatch(setUpdateTimestamp(DateTime.local()));
  }, []);

  return (
    <div>
      <CountryDrillHeader
        countryStats={{
          today: country.todayData,
          yesterday: country.yesterdayData,
        }}
      />

      {/* ---- Charts section ---- */}
      {/* Show spinner whilst data is fetching */}
      {loading ? <Spinner /> : <div className=''>Data is loaded.</div>}
    </div>
  );
};

export default CountryDrillView;
