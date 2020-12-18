import React from 'react';
import { useSelector } from 'react-redux';

import './GlobalCard.css';
import CasesGlobal from '../CasesGlobal';
import DeathsGlobal from '../DeathsGlobal';

const GlobalCard = () => {
  const globalStats = useSelector(store => store.globalStats);

  return (
    <div className='globalCard'>
      <CasesGlobal globalStats={globalStats} />
      {/* <span className='globalCard__globalEmoij'>🌎</span> */}
      <DeathsGlobal globalStats={globalStats} />
    </div>
  );
};

export default GlobalCard;
