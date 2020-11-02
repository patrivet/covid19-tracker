import React from 'react';

const CountryCard = ({country}) => {
  return (
    <React.Fragment>
      <img src={`https://hatscripts.github.io/circle-flags/flags/${country.ISO2.toLowerCase()}.svg`} alt="" width="25"></img>
      <p>{country.name}</p>
      {(country.covidData) ? <p>{`Active: ${country.covidData.active}`}</p> : <p>No covid Data found</p>}
    </React.Fragment>
  );
};

export default CountryCard;
