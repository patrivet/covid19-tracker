import React from 'react';
import './CovidTotalDeaths.css';
import NumberFormat from 'react-number-format';

const CovidTotalDeaths = ({ totalDeaths }) => {
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

export default CovidTotalDeaths;
