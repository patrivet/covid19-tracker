import React from 'react';
import { useSelector } from 'react-redux';

import CovidImg from '../../assets/imgs/coronavirus-sars-mers-flu-virus-influenza.png';
import './Header.css';

// Custom components
import Sort from '../Sort';
import ShowMenuItem from '../ShowMenuItem';

const Header = () => {
  const dataLoaded = useSelector(store => store.dataLoaded);

  return (
    <div className='appHeader'>
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
      <div className='appHeader__icons'>
        {/* Menu Options :hidden when data is loading. */}
        {!dataLoaded ? null : <Sort />}
        {!dataLoaded ? null : <ShowMenuItem />}

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
