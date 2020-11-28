import React from 'react';
import './CovidTotalCases.css';
import NumberFormat from 'react-number-format';

const CovidTotalCases = ({ totalCases }) => {
  return (
    <div className="cases cases--total ">
      <NumberFormat
        className="cases__statsNumber"
        value={totalCases}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default CovidTotalCases;
