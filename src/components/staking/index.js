import React, { useState, useEffect } from "react";
import ValuesContainer from "../valuesContainer";
import StakingPercentage from "../stakingPercentage";
import CircleLoader from "../circleLoader";
import "./staking.css";
import Faq from "../faq";
import { useWeb3Context } from "../../context/Web3Context";
import StakingList from "../stakingList";

const Staking = () => {
  const [loading, setLoading] = useState(true);
  const { totalValueLocked, getUserData, contractsLoaded, account, unstakeTokens } = useWeb3Context();
  const [userData, setUserData] = useState({
    data: { totalStaked: "0", referralRewards: "0" },
    stakes: {
      _amounts: [],
      _startTimes: [],
      _durations: [],
      _unstakeds: [],
    },
  });

  useEffect(() => {
    if (contractsLoaded == true && account) {
      getUser();
    }
  }, [contractsLoaded, account]);

  const getUser = async () => {
    const loadUserData = await getUserData();
    console.log(totalValueLocked);
    setUserData(loadUserData);
  };

  const [returnPercentage, setReturnPercentage] = useState(5);
  const [returnDays, setReturnDays] = useState(30);

  useEffect(() => {
    //Llamada a la API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <CircleLoader />;
  }

  return (
    <div className="stakingContainer">
      <ValuesContainer
        totalValue={totalValueLocked}
        personalValue={userData.data.totalStaked}
        referralValue={userData.data.referralRewards}
      />
      <StakingPercentage returnPercentage={returnPercentage} returnDays={returnDays} />
      <StakingList userStakes={userData.stakes} unstakeTokensFunction={unstakeTokens}></StakingList>
      <div className="space"></div>
    </div>
  );
};

export default Staking;
