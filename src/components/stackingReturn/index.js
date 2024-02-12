import React from 'react';
import './stackingReturn.css';

const StackingReturn = ({ returnPercentage, returnDays }) => {
  return (
    <div className="card">
      <span className="title">{returnDays} Days</span>
      <span className="percentage">{returnPercentage}% Return</span>
    </div>
  );
};

export default StackingReturn;
