import React from 'react';

// Images
import UpArrow from '../assets/imgs/up_arrow.png';
import DownArrow from '../assets/imgs/down_arrow.png';
import LevelArrow from '../assets/imgs/level_arrow.png';

/* Compute delta of val1 to val2 and return a
correspping trend image, with classnames attached */
export const getDeltaTrendImg = (val1, val2, class_name) => {
  // Return null if either val is null or undefiend
  if (val1 === null || val1 === undefined) return null;
  if (val2 === null || val2 === undefined) return null;

  const delta = val1 - val2;

  if (delta > 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--upArrow`}
        src={UpArrow}
      />
    );
  else if (delta === 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--levelArrow`}
        src={LevelArrow}
      />
    );
  else if (delta < 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--downArrow`}
        src={DownArrow}
      />
    );
};
