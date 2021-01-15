import React from 'react';
import './CountryDrillStats1.css';
import casesIcon from '../../assets/imgs/find_corona_5932166_cases1.svg';
import testsIcon from '../../assets/imgs/18-Infrared_thermometer_5929227_tests1.svg';
import activeIcon from '../../assets/imgs/coronovirus_medical_authority_health_5932588_active.svg';

// Custom components
import CasesToday from '../CasesToday';
import StatisticValue from '../StatisticValue';
import StatisticIcon from '../StatisticIcon';

const CountryDrillStats1 = ({ countryStats }) => {
  const today = countryStats.today;
  const yesterday = countryStats.yesterday;

  return (
    <div className='stats boxShadow'>
      <div className='stats__cases'>
        <StatisticIcon
          name={'cases'}
          icon={casesIcon}
          containerClasslist={'stats__title'}
        />
        <div className='stats__today'>
          <CasesToday
            todayCases={today.todayCases}
            yesterdayCases={yesterday.todayCases}
          />
        </div>
        <StatisticValue
          statName={'yesterday'}
          statValue={yesterday.todayCases}
          containerClasslist='stats__yesterday'
        />
        <StatisticValue
          statName={'total'}
          statValue={today.cases}
          containerClasslist='stats__total'
        />
        <StatisticValue
          statName={'per 1m'}
          statValue={today.casesPerOneMillion}
          containerClasslist='stats__per1M'
        />
      </div>
      <div className='stats__other'>
        <StatisticIcon
          name={'active'}
          icon={activeIcon}
          /* Add class to right align this icon - handled by the component using flexbox */
          containerClasslist={'stats__activeIcon rightAlign'}
        />
        <StatisticValue
          statName={'total'}
          statValue={today.active}
          containerClasslist='stats__activeTotal'
        />
        <StatisticValue
          statName={'per 1m'}
          statValue={today.activePerOneMillion}
          containerClasslist='stats__activePer1M'
        />

        <StatisticIcon
          name={'tests'}
          icon={testsIcon}
          containerClasslist={'stats__testsIcon rightAlign'}
        />
        <StatisticValue
          statName={'total'}
          statValue={today.tests}
          containerClasslist='stats__testsTotal'
        />
        <StatisticValue
          statName={'total'}
          statValue={today.testsPerOneMillion}
          containerClasslist='stats__testsPer1M'
        />
      </div>
    </div>
  );
};

export default CountryDrillStats1;
