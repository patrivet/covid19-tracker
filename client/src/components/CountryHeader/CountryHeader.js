import React from 'react';
import './CountryHeader.css';
const FLAG_URL = 'https://www.countryflags.io/:country_code/flat/32.png';

const CountryHeader = ({name, countryCode}) => {
  return (
    <div className="header">
      <img className="header__img" src={FLAG_URL.replace(':country_code', countryCode.toLowerCase())} alt=""></img>
      <p className={`header__name ${(name.length > 17) ? 'longName' : ''}`}>{name}</p>
    </div>
  )
};

export default CountryHeader;
