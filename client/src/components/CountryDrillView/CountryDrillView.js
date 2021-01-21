import React, { useEffect } from 'react';
import './CountryDrillView.css';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

// components and icons
import casesIcon from '../../assets/imgs/find_corona_5932166_cases1.svg';
import deathsIcon from '../../assets/imgs/17-R.I.P_5929228_deaths.svg';
import recoveredIcon from '../../assets/imgs/30-Doctor_5929214_recovered1.svg';

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
        <div className='countryCharts'>
          <div className='countryChart'>
            <HighChart
              seriesData={country.allCasesDaily}
              seriesId={'cases'}
              seriesLabel={'Cases'}
              title={'Cases (Daily)'}
              titleIcon={casesIcon}
              type={''}
            />
          </div>
          <div className='countryChart'>
            <HighChart
              seriesData={country.allCasesCumulative}
              seriesId={'cases'}
              seriesLabel={'Cases'}
              title={'Cases (Cumulative)'}
              titleIcon={casesIcon}
            />
          </div>
          <div className='countryChart'>
            <HighChart
              seriesData={country.allDeathsDaily}
              seriesId={'deaths'}
              seriesLabel={'Deaths'}
              title={'Deaths (Daily)'}
              titleIcon={deathsIcon}
            />
          </div>

          <div className='countryChart'>
            <HighChart
              seriesData={country.allDeathsCumulative}
              seriesId={'deaths'}
              seriesLabel={'Deaths'}
              title={'Deaths (Cumulative)'}
              titleIcon={deathsIcon}
            />
          </div>
          <div className='countryChart'>
            <HighChart
              seriesData={country.allCasesDaily}
              seriesId={'cases'}
              seriesLabel={'Cases'}
              series2Data={country.allDeathsDaily}
              series2Id={'deaths'}
              series2Label={'Deaths'}
              title={'Cases vs. Deaths (Daily)'}
              titleIcon={casesIcon}
              title2Icon={deathsIcon}
            />
          </div>

          <div className='countryChart'>
            <HighChart
              seriesData={country.allRecoveredDaily}
              seriesId={'recoveries'}
              seriesLabel={'Recoveries'}
              title={'Recoveries (Daily)'}
              titleIcon={recoveredIcon}
            />
          </div>

          <div className='countryChart'>
            <HighChart
              seriesData={country.allRecoveredCumulative}
              seriesId={'recoveries'}
              seriesLabel={'Recoveries'}
              title={'Recoveries (Cumulative)'}
              titleIcon={recoveredIcon}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDrillView;
