import React from 'react';
import './CovidDailyDeaths.css';
import NumberFormat from 'react-number-format';

const CovidDailyDeaths = ({todayDeaths, yesterdayDeaths}) => {
  console.log("CovidDailyDeaths -> yesterdayDeaths", yesterdayDeaths)
  console.log("CovidDailyDeaths -> todayDeaths", todayDeaths)
  /* Show deaths number (show as 0 if value is null) and, if non-null, show trend arrow
  of delta from yesterday deaths */
  const todayDataExists = todayDeaths != null;

  // Adjust deaths to 0 if currently null.
  todayDeaths = (todayDataExists) ? todayDeaths : 0;

  const yesterdayDelta = (todayDataExists)
    ? (todayDeaths - yesterdayDeaths)
    : null;

  // Delta deaths from yesterday
  const getDeltaDeaths = () => {
    return todayDataExists
    ? (<div>{getDeltaTrend()}<NumberFormat value={yesterdayDelta} thousandSeparator={true} displayType={'text'}/></div>)
    : (null)
  }

  const getDeltaTrend = () => {
    if (yesterdayDelta > 0) return '⬆️'
    else if (yesterdayDelta === 0) return '↔️'
    else if (yesterdayDelta < 0) return '⬇️'
    else return ''
  }

  return (
    <div className="dailyDeaths">
      <div>
        <NumberFormat value={todayDeaths} thousandSeparator={true} displayType={'text'}/>
      </div>
      <div className="dailyDeaths__delta">{getDeltaDeaths()}</div>
    </div>
  );
};

export default CovidDailyDeaths;