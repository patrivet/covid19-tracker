import React from 'react';
import { useSelector } from 'react-redux';
import NightModeToggle from '../NightModeToggle';
import './Footer.css';

const Footer = () => {
  let updated = useSelector(store => store.updated);

  const switchDarkLightMode = () => {
    // ! FIXME: move to redux.
    const body = document.querySelector('body');
    body.classList.toggle('darkMode')
  }

  return (
    <div className='footer'>
      <NightModeToggle switchDarkLightMode={switchDarkLightMode}/>

      <div className='footer__source'>
        <p className='footer__source' style={{"display":'inline-block'}}>
          Source:{' '}
          <a
            href='https://disease.sh/docs'
            target='_blank'
            rel='noopener noreferrer'
          >
          disease.sh
        </a>
      </p>
        <div style={{"margin":"0 5px", "display":'inline-block'}}>-</div>
        <p style={{"display":'inline-block'}}>
          Built by{' '}
          <a
            href='http://github.com/patrivet'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pat Rivet
          </a>
        </p>
      </div>
      <p className='footer__updated'>Updated: {updated}</p>
    </div>
  );
};

export default Footer;
