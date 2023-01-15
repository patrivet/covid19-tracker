import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { setDarkMode } from '../../actions/actions';
import lightModeIcon from '../../assets/imgs/lightTheme.svg';
import darkModeIcon from '../../assets/imgs/darkTheme.svg';

import './Footer.css';

const Footer = () => {
  let updated = useSelector(store => store.updated);
  const isDarkMode = useSelector(store => store.darkMode);

  return (
    <footer className="footer">
      <img
        onClick={() => store.dispatch(setDarkMode(!isDarkMode))}
        src={isDarkMode ? darkModeIcon : lightModeIcon}
        alt="theme-icon"
        style={{ cursor: 'pointer' }}
      />

      <div className="footer__source">
        <p className="footer__source" style={{ display: 'inline-block' }}>
          Source:{' '}
          <a
            href="https://disease.sh/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            disease.sh
          </a>
        </p>
        <div style={{ margin: '0 5px', display: 'inline-block' }}>-</div>
        <p style={{ display: 'inline-block' }}>
          Built by{' '}
          <a
            href="http://github.com/patrivet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pat Rivet
          </a>
        </p>
      </div>
      <p className="footer__updated">Updated: {updated}</p>
    </footer>
  );
};

export default Footer;
