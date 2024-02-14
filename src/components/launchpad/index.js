import CountdownTimer from '../countdownTimer';
import Faq from '../faq';
import GraphicBnb from '../graphicBnb';
import PayModule from '../payModule';
import Transaction from '../transaction';
import CircleLoader from '../circleLoader';
import { useState, useEffect } from 'react';

const Lunchpad = () => {
  const [loading, setLoading] = useState(true);
  const [endDate, setEndDate] = useState(
    new Date('February 28, 2024 23:59:59')
  );
  const [totalBnb, SetTotalBnb] = useState(340);
  const [userBnb, SetUserBnb] = useState(30);

  const [walletBalance, setWalletBalance] = useState(1.5);
  const [percentage, setPercentage] = useState(6.86);
  const [number, setNumber] = useState(16.825);
  const [stats, setStats] = useState(245);

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
    <div>
      <CountdownTimer endDate={endDate} />
      <GraphicBnb totalBnb={totalBnb} userBnb={userBnb} />
      <PayModule
        walletBalance={walletBalance}
        percentage={percentage}
        number={number}
        stats={stats}
      />
      <Transaction />
      <Faq />
    </div>
  );
};

export default Lunchpad;
