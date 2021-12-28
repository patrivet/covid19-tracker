import React from 'react';
import './Label.css';

const Label = ({
  classNames = '',
  text = ''
}) => <label className={classNames}>{text}</label>;

export default Label;
