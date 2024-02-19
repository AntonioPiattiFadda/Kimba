import React from "react";
import "../../Variables.css";
import "./approveModal.css";

const AproveModal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modalBackground"></div>
      <div className="modalContent">
        <h3>Approve KIMBA</h3>
        <p>You need to approve KIMBA to stake. This will allow KIMBA to be moved from your wallet to the staking contract.</p>
        <div className="modalButtons">
          <button onClick={() => setShowModal(false)} className="cancelButton">
            Cancel
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="approveButton"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AproveModal;
