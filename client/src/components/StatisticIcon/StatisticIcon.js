import React from 'react';
import './StatisticIcon.css';

const StatisticIcon = ({ name, icon, iconSize, containerClasslist }) => {
  // Note: statName,iconSize (pixels) and containerClasslist are optional.
  if (!iconSize) iconSize = 30; //default to 30

  let containerClasses = 'iconContainer';
  if (containerClasslist) containerClasses += ` ${containerClasslist}`;

  return (
    <div className={containerClasses}>
      <img
        src={icon}
        className='iconContainer__icon'
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        alt=''
      />
      {name ? <p className='iconContainer__label'>{name}</p> : null}
    </div>
  );
};

export default StatisticIcon;
