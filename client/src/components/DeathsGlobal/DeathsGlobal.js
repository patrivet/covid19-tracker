import React from 'react';
import './DeathsGlobal.css';
import NumberFormat from 'react-number-format';

// Custom components
import * as helpers from '../../utils/helperFunctions.js';

const getNumberFormatted = num => (
  <NumberFormat value={num} thousandSeparator={true} displayType={'text'} />
);

const DeathsGlobal = ({ globalStats }) => {
  const today = globalStats.todayData;
  const yesterday = globalStats.yesterdayData;

  return (
    /* Note: gDeaths = global deaths. */
    <div className='gDeaths boxShadow'>
      <p className='gDeaths__title gDeaths__title--label'>🌎 deaths</p>
      <p className='gDeaths__today-label'>today</p>
      <p className='gDeaths__todayValue gDeaths__todayValue--statsNumber'>
        {getNumberFormatted(today.todayDeaths)}
        {helpers.getDeltaTrendImg(today.todayDeaths, 'deaths')}
      </p>
      <p className='gDeaths__prev-label'>yesterday</p>
      <p className='gDeaths__prevValue gDeaths__prevValue--statsNumber'>
        {getNumberFormatted(yesterday.todayDeaths)}
      </p>
      <p className='gDeaths__total-label'>total</p>
      <p className='gDeaths__totalValue gDeaths__totalValue--statsNumber'>
        {getNumberFormatted(yesterday.deaths)}
      </p>
    </div>
  );
};

export default DeathsGlobal;
