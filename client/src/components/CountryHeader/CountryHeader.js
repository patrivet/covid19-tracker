import React from 'react';
import './CountryHeader.css';

// Images
import FavouriteAdd from '../../assets/imgs/favourite_add.png';
import FavouriteRemove from '../../assets/imgs/favourite_remove.png';
import ExpandArrow from '../../assets/imgs/expand_arrow.png';

const PUBLIC_URL = process.env.PUBLIC_URL;
const iconStyle = { width: '16px', height: '16px' };

const CountryHeader = ({ name, countryCode }) => {
  return (
    <div className='header'>
      <div className='header__id'>
        <img
          className='header__img'
          src={`
            ${PUBLIC_URL}
          /imgs/flags/${countryCode.toLowerCase()}.svg`}
          alt=''
        ></img>
        {/* If country name > 17 in length -add class to use smaller font. */}
        <p
          className={`header__name ${
            name.length > 17 ? 'header--smallFont' : ''
          }`}
        >
          {name}
        </p>
      </div>
      <div className='header__icons'>
        <img
          className='header__expandIcon'
          src={ExpandArrow}
          alt='Expand_CountryCard'
          style={iconStyle}
        />
        <img
          className='header__favouriteIcon'
          src={FavouriteAdd}
          alt='Favourite_Add'
          style={iconStyle}
        />
      </div>
    </div>
  );
};

export default CountryHeader;
