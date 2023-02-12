import React, { useState, useEffect } from 'react';
import {ReactComponent as SortArrow} from './arrow.svg';
import { useSelector } from 'react-redux';
import store from '../../store';
import { setSorting } from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import './Sort.css';

// Custom components
import { sortOptions } from '../../utils/helperFunctions';
import * as helpers from '../../utils/helperFunctions';

const Sort = () => {
  let [menuShown, setMenuShown] = useState();
  // let sortModal, closeBtn;
  let sortOptionElements = [];
  const activeSortOption = useSelector(store => store.sorting);

  const showMenu = event => {
    event.preventDefault();
    setMenuShown(true);
  };

  const applySort = sortOption => {
    /* Only handle apply sort if NOT the current sort option */
    if (isActiveSort(sortOption)) return

    // Dispatch sorting action & then close modal
    store.dispatch(setSorting(sortOption));
    handleModalClose();
  };

  const isActiveSort = (sortToSet) => {
    return activeSortOption.label === sortToSet.label && activeSortOption.direction === sortToSet.direction
  }

  // ? Commented out whilst not working on react 18. Commented out references to fn as well.
  // function closeMenu (event) {
  //   /* Check the click event is the close button or a sort option
  //      or NOT inside the sort modal element. */

  //   /* Handling click other than on a sort option - as longer the X or *outside* the modal -
  //   close the modal. */
  //   if (!sortModal.contains(event.target) || closeBtn === event.target) {
  //     handleModalClose();
  //   }
  // };

  const handleModalClose = () => {
    setMenuShown(false);
    // document.removeEventListener('click', closeMenu);
    helpers.toggleBlurClasses();
  };

  useEffect(() => {
    if (menuShown) {
      // document.addEventListener('click', closeMenu);
      helpers.toggleBlurClasses();
    }
  }, [menuShown]);

  const getArrow = (direction, sortOption) => {
    const sortOptionCopy = {...sortOption, direction};
    const isActive = isActiveSort(sortOptionCopy);
    let classNames = (isActive)
      ? ' direction-active'
      : ' direction-inactive';

    // Add the arrow direction - so svg can be rotated to point up or down.
    classNames += ` sortMenu__item ${direction}`;

    return (
      // Replace <img> with <ReactComponent>
      // <img src={`/caret-arrow-${direction}${activeText}.png`} className={classNames} onClick={() => {
      //   applySort(sortOptionCopy)}}
      // ></img>
      <SortArrow height="20" width="20" className={classNames} onClick={() => {
        applySort(sortOptionCopy)}}
      />
    )
  }

  return (
    <div className='sortMenu'>
      <button className='sortMenu__icon' onClick={showMenu}>
        <FontAwesomeIcon icon={faSortAmountDown} className='fa-2x' />
        <p className='sortMenu__label'>Sort</p>
      </button>
      {/* Show or Hide Sorting options div */}
      {menuShown ? (
        <div
          className='menu'
          /* Store a ref to the DOM element */
          // ref={element => {
          //   sortModal = element;
          // }}
        >
          <button
            // ref={element => {
            //   closeBtn = element;
            // }}
            onClick={handleModalClose}
            className='menu__close'
          >
            &times;
          </button>
          <br />
          <div>
            <div className='menu__header'>
              <FontAwesomeIcon
                icon={faSortAmountDown}
                className='menu__img fa-2x'
              />
              <h3>Sort by: </h3>
            </div>

            <div className="menu__key">
              <p className="menu__key_label">Key:</p>
              <SortArrow height="18" width="18" className="menu__key_asc asc sortMenu__item"/>
              <p className="menu__key_ascLabel" >Ascending</p>
              <SortArrow height="18" width="18" className="menu__key_desc desc sortMenu__item"/>

              <p className="menu__key_descLabel" >Descending</p>
              <div className="menu__key_active">
                <SortArrow height="18" width="18" className="menu__key_asc asc direction-active"/>
                <SortArrow height="18" width="18" className="menu__key_desc desc direction-active"/>
              </div>
              <p className="menu__key_activeLabel" >Active sort</p>
            </div>

            {/* THIS DOESN'T WORK SO USING FUNCTION INSTEAD OF COMPONENT <Arrow selected={true} sortOption={opt} /> */}

            {sortOptions.map(option => {
              /* Mark the active sort option an 'active' class, all others add an 'inactive' class. */
              let classNames =
                activeSortOption.label === option.label
                  ? ' active'
                  : ' inactive';
              return (
                <div className={`sortMenu__row ${classNames}`} key={`${option.sortVal}`}>
                  {getArrow('asc', option)}
                  {getArrow('desc', option)}
                  <div
                    ref={element => {
                      sortOptionElements.push(element);
                    }}
                  >
                    {option.label}
                  </div>
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
