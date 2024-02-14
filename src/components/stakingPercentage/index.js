import React from 'react';
import StakeAmount from '../stakeAmount';
import StakingReturn from '../stakingReturn';
import ReferralLink from '../referralLink';
import '../../Variables.css';
import './stakingPercentage.css';

const StakingPercentage = ({
  returnDays,
  returnPercentage,
  availableAmount,
  setAvailableAmount,
  referralLink,
}) => {
  return (
    <div className="sectionContainer">
      <h3 className="title">Stake Kimba get Kimba</h3>

      <div className="returnCards">
        <StakingReturn
          returnPercentage={returnPercentage}
          returnDays={returnDays}
        />
        <StakingReturn
          returnPercentage={returnPercentage}
          returnDays={returnDays}
        />
        <StakingReturn
          returnPercentage={returnPercentage}
          returnDays={returnDays}
        />
      </div>

      <StakeAmount
        availableAmount={availableAmount}
        setAvailableAmount={setAvailableAmount}
      />
      <ReferralLink referralLink={referralLink} />
    </div>
  );
};

export default StakingPercentage;
