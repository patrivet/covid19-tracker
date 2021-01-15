import React from 'react';
import { getFormattedNum } from '../../utils/helperFunctions.js';

const StatisticValue = ({
  statName,
  statValue,
  displaySize,
  containerClasslist,
}) => {
  let containerClasses = 'valueContainer';
  // conditionally add 'smallerFont' and 'optionally passed classes.  // ! NOTE: could use a classes package here e.g. 'https://www.npmjs.com/package/classnames#usage-with-reactjs'
  if (containerClasslist) containerClasses += ` ${containerClasslist}`;
  // Where displaySize is set to 'small' - add the class --smallerFont, to reduce the stat value and label font size.
  if (displaySize === 'small')
    containerClasses += ' valueContainer--smallerFont';

  return (
    <div className={containerClasses} style={{ marginBottom: '6px' }}>
      <h6 className='valueContainer__label'>{statName}</h6>
      <div className='valueContainer__statsNumber'>
        {getFormattedNum(statValue)}
      </div>
    </div>
  );
};

export default StatisticValue;
