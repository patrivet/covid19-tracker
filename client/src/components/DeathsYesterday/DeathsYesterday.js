import React from 'react';
import NumberFormat from 'react-number-format';
import MissingData from '../MissingData';

const DeathsYesterday = ({ yesterdayDeaths }) => {
  const noDataReported = !yesterdayDeaths;

  return (
    <div className='deaths deaths--yesterday'>
      <h6 className='deaths__label'>Yesterday</h6>

      {noDataReported
      ? <MissingData messageTypeEnum={2}/>
      :  <NumberFormat
        className='deaths__statsNumber'
        value={yesterdayDeaths}
        thousandSeparator={true}
        displayType={'text'}
      />}
    </div>
  );
};

export default DeathsYesterday;
