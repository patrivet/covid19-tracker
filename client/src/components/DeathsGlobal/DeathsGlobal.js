import React from 'react';
import './DeathsGlobal.css';

// Custom components
import {
  getDeltaTrendImg,
  getFormattedNum,
} from '../../utils/helperFunctions.js';

const DeathsGlobal = ({ globalStats }) => {
  const today = globalStats.todayData;
  const yesterday = globalStats.yesterdayData;

  return (
    /* Note: gDeaths = global deaths. */
    <div className='gDeaths boxShadow'>
      <p className='gDeaths__title gDeaths__title--label'>🌎 deaths</p>
      <p className='gDeaths__today-label'>today</p>
      <p className='gDeaths__todayValue gDeaths__todayValue--statsNumber'>
        {getFormattedNum(today.todayDeaths)}
        {getDeltaTrendImg(today.todayDeaths, yesterday.todayDeaths, 'deaths')}
      </p>
      <p className='gDeaths__prev-label'>yesterday</p>
      <p className='gDeaths__prevValue gDeaths__prevValue--statsNumber'>
        {getFormattedNum(yesterday.todayDeaths)}
      </p>
      <p className='gDeaths__total-label'>total</p>
      <p className='gDeaths__totalValue gDeaths__totalValue--statsNumber'>
        {getFormattedNum(today.deaths)}
      </p>
    </div>
  );
};

export default DeathsGlobal;
