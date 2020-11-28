import React from 'react';
import './DeathsTotal.css';
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
    </div>
  );
};

export default DeathsTotal;
