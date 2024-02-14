import React, { useState, useEffect } from 'react';
import ValuesContainer from '../valuesContainer';
import StakingPercentage from '../stakingPercentage';
import CircleLoader from '../circleLoader';
import './stacking.css';
import Faq from '../faq';

const Stacking = () => {
  const [loading, setLoading] = useState(true);

  const [totalValue, setTotalValue] = useState(4);
  const [personalValue, setPersonalValue] = useState(8);
  const [referralValue, setReferralValue] = useState(9);

  const [availableAmount, setAvailableAmount] = useState(40);
  const [referralLink, setReferralLink] = useState(
    'HTTPS://KIMBA.FINANCE?REF=123456'
  );
  const [returnPercentage, setReturnPercentage] = useState(5);
  const [returnDays, setReturnDays] = useState(30);

  useEffect(() => {
    //Llamada a la API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div>
        <CircleLoader />
      </div>
    );
  }

  return (
    <div className="stackingContainer">
      <ValuesContainer
        totalValue={totalValue}
        personalValue={personalValue}
        referralValue={referralValue}
      />
      <StakingPercentage
        availableAmount={availableAmount}
        setAvailableAmount={setAvailableAmount}
        referralLink={referralLink}
        returnPercentage={returnPercentage}
        returnDays={returnDays}
      />
    </div>
  );
};

export default Stacking;
