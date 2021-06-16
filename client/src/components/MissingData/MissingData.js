import React from 'react';
import './MissingData.css';

const MissingData = ({messageTypeEnum}) => {
  let something;
  if (messageTypeEnum === 1) something = "Awaiting data";
  if (messageTypeEnum === 2) something = "No data reported";

  return ( <div className="MissingData__text">({something})</div> )
}
export default MissingData