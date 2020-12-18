import React from 'react';
import './CasesGlobal.css';
import NumberFormat from 'react-number-format';

// Custom components
import * as helpers from '../../utils/helperFunctions.js';

const getNumberFormatted = num => (
  <NumberFormat value={num} thousandSeparator={true} displayType={'text'} />
);

const CasesGlobal = ({ globalStats }) => {
  const today = globalStats.todayData;
  const yesterday = globalStats.yesterdayData;

  return (
    /* Note: gCases = global cases */
    <div className='gCases boxShadow'>
      <p className='gCases__title gCases__title--label'>🌎 cases</p>
      <p className='gCases__today-label'>today</p>
      <p className='gCases__todayValue gCases__todayValue--statsNumber'>
        {getNumberFormatted(today.todayCases)}
        {helpers.getDeltaTrendImg(today.todayCases, 'cases')}
      </p>
      <p className='gCases__prev-label'>yesterday</p>
      <p className='gCases__prevValue gCases__prevValue--statsNumber'>
        {getNumberFormatted(yesterday.todayCases)}
      </p>
      <p className='gCases__total-label'>total</p>
      <p className='gCases__totalValue gCases__totalValue--statsNumber'>
        {getNumberFormatted(yesterday.cases)}
      </p>
    </div>
  );
};

export default CasesGlobal;
