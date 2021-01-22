import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner'>
      <h2 className='spinner__text label'>Fetching latest covid19 data</h2>
      <div className='loader'></div>
    </div>
  );
};

export default Spinner;
