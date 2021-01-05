import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import './Sort.css';

const Sort = () => {
  const sortOptions = [
    'Name (Ascending)',
    'Name (Descending)',
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

  const toggleBlur = () => {
    // Toggle blur class on main 2 components -filter blur is handled in App.css
    document.querySelector('.globalCard').classList.toggle('blur');
    document.querySelector('.countriesList').classList.toggle('blur');
  };

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
      toggleBlur();
    }
  };

  useEffect(() => {
    if (menuShown) {
      document.addEventListener('click', closeMenu);
      toggleBlur();
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
          /* store a reference to the DOM element */
          ref={element => {
            sortModal = element;
          }}
        >
          <div
            ref={element => {
              closeBtn = element;
            }}
            className='menu__close'
          >
            &times;
          </div>
          <br />
          <div>
            <div className='menu__header'>
              <FontAwesomeIcon
                icon={faSortAmountDown}
                className='menu__img fa-2x'
              />

              <h3>Sort Countries by: </h3>
            </div>

            <br />

            {sortOptions.map(option => {
              return (
                <div
                  key={option}
                  className='sortMenu__sortOption'
                  ref={element => {
                    sortOptionElements.push(element);
                  }}
                >
                  {option}
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
