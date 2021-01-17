import React from 'react';
import NumberFormat from 'react-number-format';

// Custom components & utils
import * as helpers from '../../utils/helperFunctions.js';

const DeathsToday = ({ todayDeaths, yesterdayDeaths }) => {
  /* Show deaths number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday deaths */
  const todayDataExists = todayDeaths != null;

  // Adjust deaths to 0 if currently null.
  todayDeaths = todayDataExists ? todayDeaths : 0;

  return (
    <div className='deaths'>
      <h6 className='deaths__label'>Today</h6>
      <div className='deaths__statsNumber'>
        <NumberFormat
          value={todayDeaths}
          thousandSeparator={true}
          displayType={'text'}
        />
        {helpers.getDeltaTrendImg(todayDeaths, yesterdayDeaths, 'deaths')}
      </div>
    </div>
  );
};

export default DeathsToday;
