import React from 'react';
import '../../Variables.css';
import './values.css';

const Values = ({ value, name }) => {
  const title =
    name === 'total'
      ? 'Total Value Locked'
      : name === 'personal'
      ? 'Personal Total Staked'
      : 'Referral Reward';
  return (
    <div className="valuesCard">
      <span className="valuesCardTitle">{title}</span>
      <span className="valuesCardValue">{value} KIMBA</span>
    </div>
  );
};

export default Values;
