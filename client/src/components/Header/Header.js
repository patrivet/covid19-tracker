import React from 'react';
import CovidImg from '../../assets/imgs/coronavirus-sars-mers-flu-virus-influenza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAmountDown,
  faEye,
  faGlasses,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

// Custom components
import Sort from '../Sort';

const Header = () => (
  <div className='appHeader'>
    <div className='appHeader__imgAndTitle'>
      <img className='appHeader__img' src={CovidImg} />
      <h4 className='appHeader__title'>
        <span className='title--firstLetter'>C</span>ovid-19{' '}
        <span className='title--firstLetter'>G</span>lobal{' '}
        <span className='title--firstLetter'>T</span>racker
      </h4>
    </div>
    <div className='appHeader__icons'>
      <Sort />
      <div className='showIcon'>
        <FontAwesomeIcon icon={faGlasses} className='fa-2x' />
        <p className='iconLabel'>Show</p>
      </div>
      <div className='settingsIcon'>
        <FontAwesomeIcon icon={faCogs} className='fa-2x' />
        <p className='iconLabel'>Settings</p>
      </div>
    </div>
  </div>
);

export default Header;
