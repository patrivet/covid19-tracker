import React from 'react';
import './CountryDrillStats2.css';
import deathsIcon from '../../assets/imgs/17-R.I.P_5929228_deaths.svg';
import recoveredIcon from '../../assets/imgs/30-Doctor_5929214_recovered1.svg';
import criticalIcon from '../../assets/imgs/Infected-patient-hospital-sick-covid19-coronavirus-covid-19_6141469_critical.svg';

// Custom components
import DeathsToday from '../DeathsToday';
import StatisticValue from '../StatisticValue';
import StatisticIcon from '../StatisticIcon';

const CountryDrillStats2 = ({ countryStats }) => {
  const today = countryStats.today;
  const yesterday = countryStats.yesterday;

  return (
    <div className='stats2 boxShadow'>
      <div className='stats2__deaths'>
        <StatisticIcon
          name={'deaths'}
          icon={deathsIcon}
          containerClasslist={'stats2__title'}
        />
        <div className='stats2__today'>
          <DeathsToday
            todayDeaths={today.todayDeaths}
            yesterdayDeaths={yesterday.todayDeaths}
          />
        </div>
        <StatisticValue
          statName={'yesterday'}
          statValue={yesterday.todayDeaths}
          containerClasslist='stats2__yesterday'
        />
        <StatisticValue
          statName={'total'}
          statValue={today.deaths}
          containerClasslist='stats2__total'
        />
        <StatisticValue
          statName={'per 1m'}
          statValue={today.deathsPerOneMillion}
          containerClasslist='stats2__per1M'
        />
      </div>
      <div className='stats2__other'>
        <StatisticIcon
          name={'critical'}
          icon={criticalIcon}
          /* Add class to right align this icon - handled by the component using flexbox */
          containerClasslist={'stats2__criticalIcon rightAlign'}
        />
        <StatisticValue
          statName={'total'}
          statValue={today.critical}
          containerClasslist='stats2__criticalTotal'
        />
        <StatisticValue
          statName={'per 1m'}
          statValue={today.criticalPerOneMillion}
          containerClasslist='stats2__criticalPer1M'
        />

        <StatisticIcon
          name={'recovered'}
          icon={recoveredIcon}
          containerClasslist={'stats2__recoveredIcon rightAlign'}
        />
        <StatisticValue
          statName={'total'}
          statValue={today.recovered}
          containerClasslist='stats2__recoveredTotal'
        />
        <StatisticValue
          statName={'per 1M'}
          statValue={today.recoveredPerOneMillion}
          containerClasslist='stats2__recoveredPer1M'
        />
      </div>
    </div>
  );
};

export default CountryDrillStats2;
