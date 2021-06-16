import React from 'react';
import './CasesToday.css';

// Custom components & utils
import * as helpers from '../../utils/helperFunctions.js';
import MissingData from '../MissingData';

const CasesToday = ({ todayCases, yesterdayCases }) => {
  /* Show cases number (show as 'awaiting data' if value is null) and, if non-null, show trend arrow
  of delta from yesterday cases */
  const nullData = !todayCases;

  return (
    <div className='cases cases--today'>
      <h6 className='cases__label'>Today</h6>
      {nullData
      ? <MissingData messageTypeEnum={1}/>
      : <div className='cases__statsNumber'>
        {helpers.getFormattedNum(todayCases)}
        {helpers.getDeltaTrendImg(todayCases, yesterdayCases, 'cases')}
      </div>
      }
    </div>
  );
};

export default CasesToday;
