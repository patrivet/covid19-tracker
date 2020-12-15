import React from 'react';
import './CountryHeader.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

const CountryHeader = ({ name, countryCode }) => {
  return (
    <div className='header'>
      <img
        className='header__img'
        src={`
          ${PUBLIC_URL}
        /imgs/flags/${countryCode.toLowerCase()}.svg`}
        alt=''
      ></img>
      {/* If country name > 17 in length -add class to use smaller font. */}
      <p
        className={`header__name ${
          name.length > 17 ? 'header--smallFont' : ''
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default CountryHeader;
