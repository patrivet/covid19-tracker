import React from 'react';

// Images
import UpArrow from '../assets/imgs/up_arrow.png';
import DownArrow from '../assets/imgs/down_arrow.png';
import LevelArrow from '../assets/imgs/level_arrow.png';

export const getDeltaTrendImg = (deltaVal, class_name) => {
  // Delta val is null or undefiend
  if (deltaVal === null || deltaVal === undefined) return '';
  else if (deltaVal > 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--upArrow`}
        src={UpArrow}
      />
    );
  else if (deltaVal === 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--levelArrow`}
        src={LevelArrow}
      />
    );
  else if (deltaVal < 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--downArrow`}
        src={DownArrow}
      />
    );
};
