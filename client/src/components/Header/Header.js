import React from 'react';
import CovidImg from '../../assets/imgs/coronavirus-sars-mers-flu-virus-influenza.png';
import { Link } from 'react-router-dom';
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
import ShowMenuItem from '../ShowMenuItem';
import store from '../../store';
import { setDisplayMode, setSorting } from '../../actions/actions';

const Header = () => {
  const navHomeAndResetDisplay = () => {
    store.dispatch(setDisplayMode('All countries')); // FIX ME - this should be a const
    store.dispatch(setSorting('Name (Ascending)')); // FIX ME - this should be a const
  };

  return (
    <div className='appHeader'>
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
