import React from 'react';
import NumberFormat from 'react-number-format';

// Custom components & utils
import * as helpers from '../../utils/helperFunctions.js';
import MissingData from '../MissingData';

const DeathsToday = ({ todayDeaths, yesterdayDeaths }) => {
  /* Show deaths number (show 'Awaiting data' if value is null) and, if non-null, show trend arrow
  of delta from yesterday deaths */
  const nullData = !todayDeaths;

  return (
    <div className='deaths'>
      <h6 className='deaths__label'>Today</h6>
      {nullData
        ? <MissingData messageTypeEnum={1}/>
        :
        <div className='deaths__statsNumber'>
          <NumberFormat
            value={todayDeaths}
            thousandSeparator={true}
            displayType={'text'}
          />
          {helpers.getDeltaTrendImg(todayDeaths, yesterdayDeaths, 'deaths')}
        </div>
      }
    </div>
  );
};

export default DeathsToday;
