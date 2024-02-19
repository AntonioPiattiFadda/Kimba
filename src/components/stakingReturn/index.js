import React from "react";
import "./stackingReturn.css";

const StakingReturn = ({ returnPercentage, returnDays, isSelected, onSelect }) => {
  return (
    <button className="cardButton" onClick={onSelect}>
      <div className={isSelected ? "card cardSelected" : "card"}>
        <span className="title">{returnDays}</span>
        <span className="percentage">{returnPercentage}% Return</span>
      </div>
    </button>
  );
};

export default StakingReturn;
