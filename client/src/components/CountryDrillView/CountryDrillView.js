import React, { useEffect } from 'react';
import './CountryDrillView.css';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

// components and icons
import casesIcon from '../../assets/imgs/find_corona_5932166_cases1.svg';

import CountryDrillHeader from '../CountryDrillHeader';
import HighChart from '../HighChart';
import Spinner from '../Spinner';
import store from '../../store';
import { fetchCountryData, setUpdateTimestamp } from '../../actions/actions';

const CountryDrillView = props => {
  // get the country passed into props-state from the link
  const country = props.location.state;
  // ! FIX ME - handle if country is null - show message sthing like: -No country to display ..click >here< to return to /
  const loading = useSelector(store => store.loading);

  useEffect(() => {
    // Get country historical stats & set loading (redux store prop) to false when done.
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
      {/* When loading historical data -show spinner. */}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <HighChart
            seriesData={country.allCasesDaily}
            seriesId={'cases'}
            seriesLabel={'Cases'}
            title={'Cases (Daily)'}
            titleIcon={casesIcon}
          />
        </div>
      )}
    </div>
  );
};

export default CountryDrillView;
