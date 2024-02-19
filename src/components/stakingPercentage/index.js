import React, { useState } from "react";
import StakeAmount from "../stakeAmount";
import StakingReturn from "../stakingReturn";
import ReferralLink from "../referralLink";
import "../../Variables.css";
import "./stakingPercentage.css";

const StakingPercentage = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="sectionContainer">
      <h3 className="title">Stake Kimba get Kimba</h3>

      <div className="returnCards">
        <StakingReturn returnPercentage={"5"} returnDays={"30 Days"} isSelected={selected === 0} onSelect={() => handleSelect(0)} />
        <StakingReturn returnPercentage={"24"} returnDays={"90 Days"} isSelected={selected === 1} onSelect={() => handleSelect(1)} />
        <StakingReturn returnPercentage={"38"} returnDays={"1 Year"} isSelected={selected === 2} onSelect={() => handleSelect(2)} />
      </div>

      <StakeAmount selectedIndex={selected} />
      <ReferralLink />
    </div>
  );
};

export default StakingPercentage;
