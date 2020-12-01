import React from 'react';
import NumberFormat from 'react-number-format';
import './CasesYesterday.css';

const CasesYesterday = ({ yesterdayCases }) => {
  return (
    <div className="cases cases--yesterday">
      <NumberFormat
        className="cases__statsNumber"
        value={yesterdayCases}
        thousandSeparator={true}
        displayType={'text'}
      />
      <h6 className="cases__label">Yesterday</h6>
      <div className="cases__seperatorDiv"></div>
    </div>
  );
};

export default CasesYesterday;
