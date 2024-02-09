import React from 'react';
import { useState } from 'react';
import AproveModal from '../approveModal';
import '../../Variables.css';
import './stakeAmount.css';

const StakeAmount = ({ setAvailableAmount, availableAmount }) => {
  const [inputValue, setInputValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    if (event.target.value > availableAmount) {
      setInputValue(availableAmount);
      alert('You do not have enough funds');
      return;
    }
    setInputValue(event.target.value);
  };

  const handleMaxClick = () => {
    setInputValue(availableAmount);
  };
  const handleAproveClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container">
      {' '}
      <div className="availableAmount">
        <span>Stake amount</span>
        <span>Available amount {availableAmount} KIMBA</span>
      </div>
      <div className="inputContainer">
        <input
          className="numberInput"
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleMaxClick} className="maxButton">
          Max
        </button>
      </div>
      <button onClick={handleAproveClick} className="aproveButton">
        {' '}
        Approve & Stake{' '}
      </button>
      {showModal && (
        <AproveModal
          setShowModal={setShowModal}
          setAvailableAmount={setAvailableAmount}
          availableAmount={availableAmount}
          inputValue={inputValue}
        />
      )}
    </div>
  );
};

export default StakeAmount;
