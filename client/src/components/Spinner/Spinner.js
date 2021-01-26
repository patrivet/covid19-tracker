import React from 'react';
import './Spinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Spinner = () => {
  return (
    <div className='spinner'>
      <FontAwesomeIcon
        icon={['fas', 'virus']}
        className='spinner__icon fa-spinner fa-spin'
      />
    </div>
  );
};

export default Spinner;
