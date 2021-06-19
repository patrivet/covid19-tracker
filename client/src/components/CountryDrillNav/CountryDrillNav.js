import React from 'react';
import './CountryDrillNav.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleFlag } from 'react-circle-flags'

// Custom components
import store from '../../store';
import { setSelectedCountry } from '../../actions/actions';
const PUBLIC_URL = process.env.PUBLIC_URL;

const CountryDrillNav = ({ country }) => {
  const resetSelectedCountry = () => {
    // Set the selected country (from a non-null value) to null.
    store.dispatch(setSelectedCountry(null));
  };

  return (
    <div className='drillNav'>
      <button>
        <Link to='/'>
          <FontAwesomeIcon
            icon={['fas', 'angle-left']}
            className='drillNav__back'
            onClick={resetSelectedCountry}
          />
        </Link>
      </button>
      <CircleFlag className='drillNav__countryImg' countryCode={country.ISO2.toLowerCase()} />
      <p>{country.name}</p>
    </div>
  );
};

export default CountryDrillNav;
