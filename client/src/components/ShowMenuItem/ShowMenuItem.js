import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { setDisplayMode } from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShowMenuItem.css';

import * as helpers from '../../utils/helperFunctions';

const ShowMenuItem = () => {
  let [menuShown, setMenuShown] = useState();
  let displayModal, closeBtn;
  let showOptionElements = ['All countries', 'Favourite countries'];
  const currentDisplayOption = useSelector(store => store.displayMode);

  const showMenu = event => {
    event.preventDefault();
    setMenuShown(true);
  };

  const handleShowOption = displayModeOption => {
    // Dispatch setDisplay action & then close modal
    store.dispatch(setDisplayMode(displayModeOption));
    handleModalClose();
  };

  const closeMenu = event => {
    /* Check the click event is the close button or a display option
       or NOT inside the display modal element. */

    /* Handling click other than on a display option - as longer the X or *outside* the modal -
    close the modal. */
    if (!displayModal.contains(event.target) || closeBtn === event.target) {
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setMenuShown(false);
    document.removeEventListener('click', closeMenu);
    helpers.toggleBlurClasses();
  };

  useEffect(() => {
    if (menuShown) {
      document.addEventListener('click', closeMenu);
      helpers.toggleBlurClasses();
    }
  }, [menuShown]);

  return (
    <div className='showMenu'>
      <div className='showMenu__icon' onClick={showMenu}>
        <FontAwesomeIcon icon={['fas', 'glasses']} className='fa-2x' />
        <p className='showMenu__label'>Show</p>
      </div>
      {/* Show or Hide Display choice modal */}
      {menuShown ? (
        <div
          className='menu'
          /* Store a ref to the DOM element */
          ref={element => {
            displayModal = element;
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
                icon={['fas', 'glasses']}
                className='fa-2x menu__img'
              />
              <h3>Show view: </h3>
            </div>
            <br />

            {showOptionElements.map(option => {
              let classNames = 'showMenu__displayOption';
              /* Mark the active display option an 'active' class, all others add an 'inactive' class. */
              classNames +=
                currentDisplayOption === option ? ' active' : ' inactive';
              return (
                <div
                  key={option}
                  className={classNames}
                  ref={element => {
                    showOptionElements.push(element);
                  }}
                  onClick={() => {
                    /* Only handle click if NOT the current display option */
                    if (currentDisplayOption !== option)
                      handleShowOption(option);
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

export default ShowMenuItem;
