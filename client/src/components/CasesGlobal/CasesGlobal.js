import React from 'react';
import './CasesGlobal.css';

// Custom components
import {
  getDeltaTrendImg,
  getFormattedNum,
} from '../../utils/helperFunctions.js';

const CasesGlobal = ({ globalStats }) => {
  const today = globalStats.todayData;
  const yesterday = globalStats.yesterdayData;

  return (
    /* Note: gCases = global cases */
    <div className='gCases boxShadow'>
      <p className='gCases__title gCases__title--label'>🌎 cases</p>
      <p className='gCases__today-label'>today</p>
      <p className='gCases__todayValue gCases__todayValue--statsNumber'>
        {getFormattedNum(today.todayCases)}
        {getDeltaTrendImg(today.todayCases, yesterday.todayCases, 'cases')}
      </p>
      <p className='gCases__prev-label'>yesterday</p>
      <p className='gCases__prevValue gCases__prevValue--statsNumber'>
        {getFormattedNum(yesterday.todayCases)}
      </p>
      <p className='gCases__total-label'>total</p>
      <p className='gCases__totalValue gCases__totalValue--statsNumber'>
        {getFormattedNum(today.cases)}
      </p>
    </div>
  );
};

export default CasesGlobal;
