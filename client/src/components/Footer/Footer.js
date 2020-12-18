import React from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';

import './Footer.css';

const Footer = () => {
  let updated = useSelector(store => store.updated);

  return (
    <div className='footer'>
      <p className='footer__dark-mode'></p>
      <div className='footer__source-and-attribution'>
        <p>
          Sources: Worldometers.info and John Hopkins Uni via{' '}
          <a href='https://disease.sh/docs' target='_blank'>
            disease.sh
          </a>
        </p>
        <p>
          Built by{' '}
          <a href='http://github.com/patrivet' target='_blank'>
            Pat Rivet
          </a>
        </p>
      </div>
      <p className='footer__updated'>Last Updated: {updated}</p>
    </div>
  );
};

export default Footer;
