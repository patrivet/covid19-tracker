import React from 'react';
import { getFormattedNum } from '../../utils/helperFunctions.js';
import MissingData from '../MissingData';

const StatisticValue = ({
  statName,
  statValue,
  displaySize,
  containerClasslist,
  percent
}) => {
  let containerClasses = 'valueContainer';
  // conditionally add 'smallerFont' and 'optionally passed classes.  // ! NOTE: could use a classes package here e.g. 'https://www.npmjs.com/package/classnames#usage-with-reactjs'
  if (containerClasslist) containerClasses += ` ${containerClasslist}`;
  // Where displaySize is set to 'small' - add the class --smallerFont, to reduce the stat value and label font size.
  if (displaySize === 'small')
    containerClasses += ' valueContainer--smallerFont';

  // classNames:
  // const containerClasses = classNames('valueContainer', {
  //   [`${containerClasslist}`]: containerClasslist,
  //   'valueContainer--smallerFont': displaySize === 'small'
  // });

    // 2=used for yesterday ("No data reported") 1=used for today ("Awaiting data")
    const messageTypeEnum = (statName === 'yesterday') ? 2 : 1;
    const noDataReported = !statValue;
  return (
    <div className={containerClasses} style={{ marginBottom: '6px' }}>
      <h6 className='valueContainer__label'>{statName}</h6>
      {noDataReported
      ? <MissingData messageTypeEnum={messageTypeEnum}/>
      : <div className='valueContainer__statsNumber'>
        {getFormattedNum(statValue)}
        {percent && '%'}
      </div>}
    </div>
  );
};

export default StatisticValue;
