import React from "react";
import Values from "../values";
import "../../Variables.css";
import "./valuesContainer.css";
import { fromWei } from "../../utils/web3Utils";

const ValuesContainer = ({ personalValue, totalValue, referralValue }) => {
  return (
    <div className="valuesContainer">
      <Values value={totalValue} name="total" />
      <Values value={fromWei(personalValue)} name="personal" />
      <Values value={fromWei(referralValue)} name="referral" />
    </div>
  );
};

export default ValuesContainer;
