import React from 'react';
import NumberFormat from 'react-number-format';

const DeathsYesterday = ({ yesterdayDeaths }) => {
  return (
    <div className='deaths deaths--yesterday'>
      <h6 className='deaths__label'>Yesterday</h6>
      <NumberFormat
        className='deaths__statsNumber'
        value={yesterdayDeaths}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default DeathsYesterday;
