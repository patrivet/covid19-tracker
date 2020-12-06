import React from 'react';
import './CountryHeader.css';

const CountryHeader = ({ name, countryCode }) => {
  return (
    <div className='header'>
      <img
        className='header__img'
        src={`${
          process.env.PUBLIC_URL
        }/imgs/flags/${countryCode.toLowerCase()}.svg`}
        alt=''
      ></img>
      <p className={`header__name ${name.length > 17 ? 'longName' : ''}`}>
        {name}
      </p>
    </div>
  );
};

export default CountryHeader;
