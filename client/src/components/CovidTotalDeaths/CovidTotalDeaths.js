import React from 'react';
import './CovidTotalDeaths.css';
import NumberFormat from 'react-number-format';

const CovidTotalDeaths = ({ totalDeaths }) => {
  return (
    <div className="totalDeaths statsNumber">
      <div>
        <NumberFormat
          value={totalDeaths}
          thousandSeparator={true}
          displayType={'text'}
        />
      </div>
    </div>
  );
};

export default CovidTotalDeaths;
