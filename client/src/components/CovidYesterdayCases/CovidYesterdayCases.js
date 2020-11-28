import React from 'react';
import NumberFormat from 'react-number-format';

const CovidYesterdayCases = ({ yesterdayCases }) => {
  return (
    <div className="cases__statsNumber cases--yesterday">
      <NumberFormat
        value={yesterdayCases}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default CovidYesterdayCases;
