import React from 'react';
import NumberFormat from 'react-number-format';

const DeathsToday = ({ todayDeaths, yesterdayDeaths }) => {
  /* Show deaths number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday deaths */
  const todayDataExists = todayDeaths != null;

  // Adjust deaths to 0 if currently null.
  todayDeaths = todayDataExists ? todayDeaths : 0;

  const yesterdayDelta = todayDataExists ? todayDeaths - yesterdayDeaths : null;

  // Delta deaths from yesterday
  const getDeltaDeaths = () => {
    return todayDataExists ? (
      <div>
        {getDeltaTrend()}
        <NumberFormat
          value={yesterdayDelta}
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
    <div className="deaths">
      <div className="deaths__statsNumber">
        <NumberFormat
          value={todayDeaths}
          thousandSeparator={true}
          displayType={'text'}
        />
        <span className="deaths__deltaNumber">{getDeltaTrend()}</span>
      </div>
      <h6 className="deaths__label">Today</h6>
      <div className="deaths__seperatorDiv"></div>
    </div>
  );
};

export default DeathsToday;
