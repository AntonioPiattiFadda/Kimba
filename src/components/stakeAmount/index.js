import React from 'react';
import { useState } from 'react';
import AproveModal from '../approveModal';
import '../../Variables.css';
import './stakeAmount.css';

const StakeAmount = ({ setAvailableAmount, availableAmount }) => {
  const [inputValue, setInputValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [amoutExceededMessage, setAmoutExceededMessage] = useState(false);

  const handleChange = (event) => {
    if (event.target.value > availableAmount) {
      setInputValue(availableAmount);
      setAmoutExceededMessage(true);
      setTimeout(() => {
        setAmoutExceededMessage(false);
      }, 3000);
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
        {amoutExceededMessage && (
          <span className="amoutExceededMessage">
            Amount exceeded available balance. Your maximum available amount is{' '}
            {availableAmount}
          </span>
        )}
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
