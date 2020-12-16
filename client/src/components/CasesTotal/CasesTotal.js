import React from 'react';
import NumberFormat from 'react-number-format';

const CasesTotal = ({ totalCases }) => {
  return (
    <div className='cases cases--total '>
      <h6 className='cases__label'>Total</h6>
      <NumberFormat
        className='cases__statsNumber'
        value={totalCases}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default CasesTotal;
