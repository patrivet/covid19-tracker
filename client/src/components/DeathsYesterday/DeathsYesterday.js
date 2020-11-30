import React from 'react';
import NumberFormat from 'react-number-format';

const DeathsYesterday = ({ yesterdayDeaths }) => {
  return (
    <div className="deaths deaths--yesterday">
      <NumberFormat
        className="deaths__statsNumber"
        value={yesterdayDeaths}
        thousandSeparator={true}
        displayType={'text'}
      />
      <h6 className="deaths__label">Yesterday</h6>
      <div className="deaths__seperatorDiv"></div>
    </div>
  );
};

export default DeathsYesterday;
