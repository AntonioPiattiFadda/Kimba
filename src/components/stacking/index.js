import React from 'react';
import ValuesContainer from '../valuesContainer';
import StakingPercentage from '../stakingPercentage';
import './stacking.css';

const Stacking = () => {
  return (
    <div className='stackingContainer'>
      <ValuesContainer />
      <StakingPercentage />
    </div>
  );
};

export default Stacking;
