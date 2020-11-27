import React from 'react';
import NumberFormat from 'react-number-format';

const CovidYesterdayCases = ({ yesterdayCases }) => {
  return (
    <div className="yesterdayCases statsNumber">
      <NumberFormat
        value={yesterdayCases}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default CovidYesterdayCases;
