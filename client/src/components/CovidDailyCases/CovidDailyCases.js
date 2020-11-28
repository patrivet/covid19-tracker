import React from 'react';
import './CovidDailyCases.css';
import NumberFormat from 'react-number-format';

const CovidDailyCases = ({ todayCases, yesterdayCases }) => {
  /* Show cases number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday cases */
  const todayDataExists = todayCases != null;

  // Adjust cases to 0 if currently null.
  todayCases = todayDataExists ? todayCases : 0;

  const yesterdayDelta = todayDataExists ? todayCases - yesterdayCases : null;

  // Delta cases from yesterday
  const getDeltaCases = () => {
    return todayDataExists ? (
      <div>
        <NumberFormat
          value={yesterdayCases}
          thousandSeparator={true}
          displayType={'text'}
        />
      </div>
    ) : null;
  };

  const getDeltaTrend = () => {
    if (yesterdayDelta > 0) return ' ⬆️';
    else if (yesterdayDelta === 0) return ' ↔️';
    else if (yesterdayDelta < 0) return ' ⬇️';
    else return '';
  };

  return (
    <div className="cases">
      <div className="cases__statsNumber">
        <NumberFormat
          value={todayCases}
          thousandSeparator={true}
          displayType={'text'}
        />
        <span className="cases__deltaSymbol">{getDeltaTrend()}</span>
      </div>
      <div className="cases__deltaNumber">{getDeltaCases()}</div>
    </div>
  );
};

export default CovidDailyCases;
