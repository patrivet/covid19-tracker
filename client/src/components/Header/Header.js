import React from 'react';
import { useSelector } from 'react-redux';

import CovidImg from '../../assets/imgs/coronavirus-sars-mers-flu-virus-influenza.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

// Custom components
import Sort from '../Sort';
import ShowMenuItem from '../ShowMenuItem';
import store from '../../store';
import {
  setDisplayMode,
  setSorting,
  setSelectedCountry,
} from '../../actions/actions';
const PUBLIC_URL = process.env.PUBLIC_URL;

const Header = () => {
  const selectedCountry = useSelector(store => store.selectedCountry);

  const navHomeAndResetDisplay = () => {
    store.dispatch(setDisplayMode('All countries')); // FIX ME - this should be a const
    store.dispatch(setSorting('Name (Ascending)')); // FIX ME - this should be a const

    // Set the selected country (from a non-null value) to null.
    store.dispatch(setSelectedCountry(null));
  };

  return (
    <div className='appHeader'>
      {!selectedCountry ? (
        <Link to='/'>
          <div
            className='appHeader__imgAndTitle'
            onClick={navHomeAndResetDisplay}
          >
            <img className='appHeader__img' src={CovidImg} />
            <h4 className='appHeader__title'>
              <span className='title--firstLetter'>C</span>ovid-19{' '}
              <span className='title--firstLetter'>G</span>lobal{' '}
              <span className='title--firstLetter'>T</span>racker
            </h4>
          </div>
        </Link>
      ) : (
        <div className='appHeader__country'>
          <Link to='/'>
            <FontAwesomeIcon
              icon={['fas', 'angle-left']}
              className='appHeader__back'
              onClick={navHomeAndResetDisplay}
            />
          </Link>
          <img
            className='appHeader__countryImg'
            src={`
                  ${PUBLIC_URL}
                /imgs/flags/${selectedCountry.countryCode.toLowerCase()}.svg`}
            alt=''
          ></img>
          <p>{selectedCountry.name}</p>
        </div>
      )}

      <div className='appHeader__icons'>
        <Sort />
        <ShowMenuItem />

        {/* Note: Hidden until this is in use.
          <div className='settingsIcon'>
          <FontAwesomeIcon icon={faCogs} className='fa-2x' />
          <p className='iconLabel'>Settings</p>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
