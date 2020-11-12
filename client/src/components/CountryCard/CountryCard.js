import React from 'react';

const CountryCard = ({country}) => {
  const getDailyFigure = (mode) => {
    return (mode === 'cases')
      ? (country.dailyCases) ? country.dailyCases : 0
      : (country.dailyDeaths) ? country.dailyDeaths : 0
  }

  return (
    <React.Fragment>
      <img src={`https://hatscripts.github.io/circle-flags/flags/${country.ISO2.toLowerCase()}.svg`} alt="" width="25"></img>
      <p>{country.name}</p>

    </React.Fragment>
  );
};

export default CountryCard;
