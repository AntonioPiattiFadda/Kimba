import React from 'react';
import { useState } from 'react';
import StakeAmount from '../stakeAmount';
import StackingReturn from '../stackingReturn';
import ReferralLink from '../referralLink';
import './stakingPercentage.css';

const StakingPercentage = () => {
  const [availableAmount, setAvailableAmount] = useState(40);
  const [referralLink, setReferralLink] = useState(
    'HTTPS://KIMBA.FINANCE?REF=123456'
  );

  return (
    <div>
      <h3 className="title">Stake Kimba get Kimba</h3>

      <div className="returnCards">
        <StackingReturn />
        <StackingReturn />
        <StackingReturn />
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
