import React from 'react';
import './CovidDailyCases.css';
import NumberFormat from 'react-number-format';

const CovidDailyCases = ({todayCases, yesterdayCases}) => {
  /* Show cases number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday cases */

  const todayDataPresent = todayCases != null;

  return (
    <div className="dailyCasesContainer">
      <div><NumberFormat value={todayCases} thousandSeparator={true} displayType={'text'}/></div>
      <div><NumberFormat value={yesterdayCases} thousandSeparator={true} displayType={'text'}/></div>
    </div>
  );
};

export default CovidDailyCases;
