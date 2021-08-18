import React from 'react';
import './NightModeToggle.css'

const NightModeToggle = ({switchDarkLightMode}) => (
  <div class="switch">
    <input id="switch__input" type="checkbox" onClick={switchDarkLightMode}/>
    <label for="switch__input">
    </label>
  </div>
);

export default NightModeToggle;
