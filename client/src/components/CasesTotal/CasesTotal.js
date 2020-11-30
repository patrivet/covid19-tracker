import React from 'react';
import './CasesTotal.css';
import NumberFormat from 'react-number-format';

const CasesTotal = ({ totalCases }) => {
  return (
    <div className="cases cases--total ">
      <NumberFormat
        className="cases__statsNumber"
        value={totalCases}
        thousandSeparator={true}
        displayType={'text'}
      />
      <h6 className="cases__label">Total</h6>
    </div>
  );
};

export default CasesTotal;
