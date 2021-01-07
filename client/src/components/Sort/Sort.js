import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { setSorting } from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import './Sort.css';

// Custom components
import { sortOptions } from '../../utils/helperFunctions';
/* TODO make sortOptions a shorter list by have an arrow for click to change from Ascending to Descending */

const Sort = () => {
  let [menuShown, setMenuShown] = useState();
  let sortModal, closeBtn;
  let sortOptionElements = [];
  const activeSortOption = useSelector(store => store.sorting);

  const toggleBlur = () => {
    // Toggle blur class on main 2 components -filter blur is handled in App.css
    document.querySelector('.globalCard').classList.toggle('blur');
    document.querySelector('.countriesList').classList.toggle('blur');
  };

  const showMenu = event => {
    event.preventDefault();
    setMenuShown(true);
  };

  const applySort = sortOption => {
    // Dispatch sorting action & then close modal
    store.dispatch(setSorting(sortOption));
    handleModalClose();
  };

  const closeMenu = event => {
    /* Check the click event is the close button or a sort option
       or NOT inside the sort modal element. */

    /* Handling click other than on a sort option - as longer the X or *outside* the modal -
    close the modal. */
    if (!sortModal.contains(event.target) || closeBtn === event.target) {
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setMenuShown(false);
    document.removeEventListener('click', closeMenu);
    toggleBlur();
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
          /* Store a ref to the DOM element */
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
              let classNames = 'sortMenu__sortOption';
              /* Mark the active sort option an 'active' class, all others add an 'inactive' class. */
              classNames +=
                activeSortOption.label === option.label
                  ? ' active'
                  : ' inactive';
              return (
                <div
                  key={`${option.sortVal}_${option.direction}`}
                  className={classNames}
                  ref={element => {
                    sortOptionElements.push(element);
                  }}
                  onClick={() => {
                    /* Only handle click if NOT the current sort option */
                    if (activeSortOption.label !== option.label)
                      applySort(option);
                  }}
                >
                  {option.label}
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
