import React from 'react';
import Values from '../values';
import '../../Variables.css';
import './valuesContainer.css';

const ValuesContainer = ({ personalValue, totalValue, referralValue }) => {
  return (
    <div className="valuesContainer">
      <Values value={totalValue} name="total" />
      <Values value={personalValue} name="personal" />
      <Values value={referralValue} name="referral" />
    </div>
  );
};

export default ValuesContainer;
