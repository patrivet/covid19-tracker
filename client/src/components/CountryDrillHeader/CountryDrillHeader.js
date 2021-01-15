import React from 'react';
import './CountryDrillHeader.css';

// components
import CountryDrillStats1 from '../CountryDrillStats1';
import CountryDrillStats2 from '../CountryDrillStats2';
const CountryDrillHeader = ({ countryStats }) => {
  return (
    <div className='countryDrillHdr'>
      <CountryDrillStats1 countryStats={countryStats} />

      <CountryDrillStats2 countryStats={countryStats} />
    </div>
  );
};

export default CountryDrillHeader;
