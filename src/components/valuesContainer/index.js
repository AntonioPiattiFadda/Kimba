import React from 'react';
import Values from '../values';
import { useState } from 'react';
import '../../Variables.css';
import './valuesContainer.css';

const ValuesContainer = () => {
  const [totalValue, setTotalValue] = useState(4);
  const [personalValue, setPersonalValue] = useState(8);
  const [referralValue, setReferralValue] = useState(9);

  return (
    <div className="valuesContainer">
      <Values value={totalValue} name="total" />
      <Values value={personalValue} name="personal" />
      <Values value={referralValue} name="referral" />
    </div>
  );
};

export default ValuesContainer;
