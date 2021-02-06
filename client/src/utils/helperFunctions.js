import React from 'react';
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';

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
        className={`${class_name}__deltaSymbol ${class_name}--upArrow`}
        src={UpArrow}
        alt='Up trend arrow'
      />
    );
  else if (delta === 0)
    return (
      <img
        className={`${class_name}__deltaSymbol ${class_name}--levelArrow`}
        src={LevelArrow}
        alt='Level trend arrow'
      />
    );
  else if (delta < 0)
    return (
      <img
        className={`${class_name}__deltaSymbol ${class_name}--downArrow`}
        src={DownArrow}
        alt='Down trend arrow'
      />
    );
};

export const toggleBlurClasses = () => {
  // Toggle blur class on main components -filter blur is handled in App.css
  document.querySelector('.globalCard').classList.toggle('blur');
  document.querySelector('.countriesList').classList.toggle('blur');
  document.querySelector('.App__bookmarkTitle').classList.toggle('blur');
};

export function addToLocalStorageAsJSON(propName, value) {
  localStorage.setItem(propName, JSON.stringify(value));
}

// Return a formatted number, seperated by thousands.
export const getFormattedNum = num => (
  <NumberFormat value={num} thousandSeparator={true} displayType={'text'} />
);

// Convert passed date string, in passed format, into a timestamp
export const convertToTimestamp = (dateStr, format) =>
  DateTime.fromFormat(dateStr, format).ts;

// Takes an array of arrays, and in inner array, -converts the 1st value (date as string) to a timestamp
export function convertArrayDates(arr) {
  return arr.map(([dateStr, val]) => [
    convertToTimestamp(dateStr, 'M/d/yy'),
    val,
  ]);
}

// Takes an array of arrays, and in inner array, converts cumulative values to seperate values.
export function generateDailyStats(statsArr) {
  return statsArr.map(([date, val], i, arr) => {
    if (i === 0) return [date, val];
    // Calculate daily val as current day less the previous day's cumulative sum.
    let res = val - arr[i - 1][1];
    return [date, res];
  });
}

/* Sorting options property */
export const sortOptions = [
  { label: 'Name (Ascending)', sortVal: 'name', direction: 'asc' },
  { label: 'Name (Descending)', sortVal: 'name', direction: 'desc' },
  {
    label: 'Cases today (Ascending)',
    sortVal: 'todayData.todayCases',
    direction: 'asc',
  },
  {
    label: 'Cases today (Descending)',
    sortVal: 'todayData.todayCases',
    direction: 'desc',
  },
  {
    label: 'Deaths today (Ascending)',
    sortVal: 'todayData.todayDeaths',
    direction: 'asc',
  },
  {
    label: 'Deaths today (Descending)',
    sortVal: 'todayData.todayDeaths',
    direction: 'desc',
  },
  {
    label: 'Cases yesterday (Ascending)',
    sortVal: 'yesterdayData.todayCases',
    direction: 'asc',
  },
  {
    label: 'Cases yesterday (Descending)',
    sortVal: 'yesterdayData.todayCases',
    direction: 'desc',
  },
  {
    label: 'Deaths yesterday (Ascending)',
    sortVal: 'yesterdayData.todayDeaths',
    direction: 'asc',
  },
  {
    label: 'Deaths yesterday (Descending)',
    sortVal: 'yesterdayData.todayDeaths',
    direction: 'desc',
  },
  {
    label: 'Cases total (Ascending)',
    sortVal: 'todayData.cases',
    direction: 'asc',
  },
  {
    label: 'Cases total (Descending)',
    sortVal: 'todayData.cases',
    direction: 'desc',
  },
  {
    label: 'Deaths total (Ascending)',
    sortVal: 'todayData.deaths',
    direction: 'asc',
  },
  {
    label: 'Deaths total (Descending)',
    sortVal: 'todayData.deaths',
    direction: 'desc',
  },
];
