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
import { setSelectedCountry } from '../../actions/actions';
const PUBLIC_URL = process.env.PUBLIC_URL;

const Header = () => {
  const selectedCountry = useSelector(store => store.selectedCountry);
  const dataLoaded = useSelector(store => store.dataLoaded);

  const resetSelectedCountry = () => {
    // Set the selected country (from a non-null value) to null.
    store.dispatch(setSelectedCountry(null));
  };

  return (
    <div className='appHeader'>
      {!selectedCountry ? (
        <div className='appHeader__imgAndTitle'>
          <img
            className='appHeader__img'
            src={CovidImg}
            alt='Covid-19 virus icon'
          />
          <h4 className='appHeader__title'>
            <span className='title--firstLetter'>C</span>ovid-19{' '}
            <span className='title--firstLetter'>G</span>lobal{' '}
            <span className='title--firstLetter'>T</span>racker
          </h4>
        </div>
      ) : (
        <div className='appHeader__country'>
          <Link to='/'>
            <FontAwesomeIcon
              icon={['fas', 'angle-left']}
              className='appHeader__back'
              onClick={resetSelectedCountry}
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
        {/* Menu Options shown for global; hidden for country view (when selectedCountry is set) */}
        {selectedCountry || !dataLoaded ? null : <Sort />}
        {selectedCountry || !dataLoaded ? null : <ShowMenuItem />}

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
