import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import './Sort.css';

const Sort = () => {
  const sortOptions = [
    'Country name (Ascending)',
    'Country name (Descending)',
    'Cases today (Ascending)',
    'Cases today (Descending)',
    /* TODO or have an arrow for click to change  from Ascending to Descending */
    'Deaths today (Ascending)',
    'Deaths today (Descending)',
    'Cases total (Ascending)',
    'Cases total (Descending)',
    'Deaths total (Ascending)',
    'Deaths total (Descending)',
  ];

  let [menuShown, setMenuShown] = useState();
  let sortModal, closeBtn;
  let sortOptionElements = [];
  const [sortOption, setSortOption] = useState(sortOptions[0]);

  const showMenu = event => {
    event.preventDefault();
    setMenuShown(true);
  };

  const closeMenu = event => {
    // Check the click event is the close button or a sort option or NOT inside the sort modal element.
    if (
      !sortModal.contains(event.target) ||
      closeBtn === event.target ||
      sortOptionElements.includes(event.target)
    ) {
      setMenuShown(false);
      document.removeEventListener('click', closeMenu);
    }
  };

  useEffect(() => {
    if (menuShown) {
      document.addEventListener('click', closeMenu);
    }
  }, [menuShown]);

  return (
    <div className='sortMenu'>
      <div className='sortMenu__icon' onClick={showMenu}>
        <FontAwesomeIcon icon={faSortAmountDown} className='fa-2x' />
        <p className='sortMenu__label'>Sort</p>
      </div>
      {/* Show or Hide Sorting options div */}
      {menuShown ? (
        <div
          className='menu'
          /* store a  reference to the DOM element */
          ref={element => {
            sortModal = element;
          }}
        >
          <div>
            <FontAwesomeIcon
              icon={faSortAmountDown}
              className='menu__img fa-2x'
            />

            <p>
              Sort Countries By:-{' '}
              <span
                ref={element => {
                  closeBtn = element;
                }}
                className='menu__close'
              >
                &times;
              </span>
            </p>

            {sortOptions.map(option => {
              return (
                <div key={option}>
                  <span
                    className='sortMenu__sortOptionItem'
                    ref={element => {
                      sortOptionElements.push(element);
                    }}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sort;
