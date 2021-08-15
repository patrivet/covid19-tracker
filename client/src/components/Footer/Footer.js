import React from 'react';
import { useSelector } from 'react-redux';

import './Footer.css';

const Footer = () => {
  let updated = useSelector(store => store.updated);

  return (
    <div className='footer'>
      <input class="toggle" type="checkbox" />

      <div className='footer__source'>
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
        <div style={{"margin":"0 5px", "display":'inline-block'}}>||</div>
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
      </div>
      <p className='footer__updated'>Updated: {updated}</p>
    </div>
  );
};

export default Footer;
