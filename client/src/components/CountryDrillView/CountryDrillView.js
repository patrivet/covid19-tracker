import React from 'react';

const CountryDrillView = props => {
  // get the country passed into props-state from the link
  const country = props.location.state;

  // ! FIX ME - handle if country is null - show message sthing like: -No country to display ..click >here< to return to /

  return <div>CountryDrillView</div>;
};

export default CountryDrillView;
