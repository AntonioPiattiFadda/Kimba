import React from "react";
import { useState } from "react";
import AproveModal from "../approveModal";
import "../../Variables.css";
import "./stakeAmount.css";
import { useWeb3Context } from "../../context/Web3Context";

const StakeAmount = ({ selectedIndex }) => {
  const { kimbaBalance } = useWeb3Context();
  const [inputValue, setInputValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [amoutExceededMessage, setAmoutExceededMessage] = useState(false);
  const { stakeTokens } = useWeb3Context();

  const getReferralAddressFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get("ref");
    if (!refParam) return null;

    // Decodificar de base64
    try {
      const decodedRef = atob(refParam);
      return decodedRef;
    } catch (error) {
      console.error("Error decodificando el parámetro de referido:", error);
      return null;
    }
  };

  const handleChange = (event) => {
    if (event.target.value > kimbaBalance) {
      setInputValue(kimbaBalance);
      setAmoutExceededMessage(true);
      setTimeout(() => {
        setAmoutExceededMessage(false);
      }, 3000);
      return;
    }
    setInputValue(event.target.value);
  };

  const handleMaxClick = () => {
    setInputValue(kimbaBalance);
  };

  const handleApproveClick = () => {
    const referralAddress = getReferralAddressFromURL();
    stakeTokens(inputValue, selectedIndex+1, referralAddress);
  };

  return (
    <div className="container">
      <div className="availableAmount">
        <span>Stake amount</span>
        <span>Available amount {kimbaBalance} KIMBA</span>
      </div>
      <div className="inputContainer">
        <input className="numberInput" type="number" value={inputValue} onChange={handleChange} />
        {amoutExceededMessage && (
          <span className="amoutExceededMessage">Amount exceeded available balance. Your maximum available amount is {kimbaBalance}</span>
        )}
        <button onClick={handleMaxClick} className="maxButton">
          Max
        </button>
      </div>
      <button onClick={handleApproveClick} className="aproveButton">
        Approve & Stake
      </button>
      {showModal && <AproveModal setShowModal={setShowModal} kimbaBalance={kimbaBalance} inputValue={inputValue} />}
    </div>
  );
};

export default StakeAmount;
