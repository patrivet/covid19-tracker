import React from 'react';
import './CovidTotalCases.css';
import NumberFormat from 'react-number-format';

const CovidTotalCases = ({totalCases}) => {
  return (
    <div className="totalCases">
      <div>
        <NumberFormat value={totalCases} thousandSeparator={true} displayType={'text'}/>
      </div>
    </div>
  );
};

export default CovidTotalCases;