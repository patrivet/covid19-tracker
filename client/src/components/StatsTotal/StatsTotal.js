import React from 'react';
import NumberFormat from 'react-number-format';

const StatsTotal = ({ value, containerClassName, className, label }) => {
  return (
    <div className={`${className} ${containerClassName ? containerClassName : ''}`}>
      <h6 className={`${className}__label`}>{label}</h6>
      <NumberFormat
        className={`${className}__statsNumber`}
        value={value}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default StatsTotal;
