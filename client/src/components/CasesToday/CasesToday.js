import React from 'react';
import './CasesToday.css';
import NumberFormat from 'react-number-format';

// Images
import UpArrow from '../../assets/imgs/up_arrow.png';
import DownArrow from '../../assets/imgs/down_arrow.png';
import LevelArrow from '../../assets/imgs/level_arrow.png';

// Custom components & utils
import * as helpers from '../../utils/helperFunctions.js';

const CasesToday = ({ todayCases, yesterdayCases }) => {
  /* Show cases number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday cases */
  const todayDataExists = todayCases != null;

  // Adjust cases to 0 if currently null.
  todayCases = todayDataExists ? todayCases : 0;

  return (
    <div className='cases cases--today'>
      <h6 className='cases__label'>Today</h6>
      <div className='cases__statsNumber'>
        <NumberFormat
          value={todayCases}
          thousandSeparator={true}
          displayType={'text'}
        />
        {helpers.getDeltaTrendImg(todayCases, yesterdayCases, 'cases')}
      </div>
    </div>
  );
};

export default CasesToday;
