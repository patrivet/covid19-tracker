import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CountryHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../../store';
import { useSelector } from 'react-redux';
import {
  toggleCountryToFavourites,
  setSelectedCountry,
} from '../../actions/actions';

// Images
import ExpandArrow from '../../assets/imgs/expand_arrow.png';

const PUBLIC_URL = process.env.PUBLIC_URL;
const iconStyle = { width: '26px', height: '26px' };
let favCountries = [];

const CountryHeader = ({ country }) => {
  const name = country.name;
  const countryCode = country.ISO2;

  // Get the fav countries
  favCountries = useSelector(store => store.favouriteCountries);
  // Determine if country is fav and set in local state.
  const [fav, setFav] = useState(favCountries.includes(countryCode));

  const toggleFav = countryCode => {
    // Toggle the country in store (array of fav countries).
    store.dispatch(toggleCountryToFavourites(countryCode));
    setFav(!fav); // toggle fav in local state.
  };

  const getFavIconStyle = () => {
    return fav
      ? ['fas', 'bookmark'] // favourite (solid) style
      : ['far', 'bookmark']; // non-favourite (regular) style
  };

  const linkContent = {
    pathname: `country/${countryCode}`,
    // pass the country as state for the link
    state: country,
  };

  const handleSetCountry = () => {
    store.dispatch(setSelectedCountry({ name, countryCode }));
  };

  return (
    <div className='header'>
      <Link to={linkContent} onClick={handleSetCountry}>
        <div className='header__id'>
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
      </Link>
      <div className='header__icons'>
        {/* NOTE: removed until in use.
        <img
          className='header__expandIcon'
          src={ExpandArrow}
          alt='Expand_CountryCard'
          style={iconStyle}
        /> */}

        <FontAwesomeIcon
          className='header__favouriteIcon'
          icon={getFavIconStyle()}
          style={{ iconStyle }}
          onClick={() => toggleFav(countryCode)}
        />
      </div>
    </div>
  );
};

export default CountryHeader;
