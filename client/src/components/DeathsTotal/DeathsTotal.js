import React from 'react';
import NumberFormat from 'react-number-format';

const DeathsTotal = ({ totalDeaths }) => {
  return (
    <div className="deaths deaths--total">
      <NumberFormat
        className="deaths__statsNumber"
        value={totalDeaths}
        thousandSeparator={true}
        displayType={'text'}
      />
      <h6 className="deaths__label">Total</h6>
    </div>
  );
};

export default DeathsTotal;
