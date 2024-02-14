import React from 'react';
import { useState, useEffect } from 'react';
import './countdownTimer.css';

function CountdownTimer({ endDate }) {
  const calculateCountdown = () => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div>
      <div className="cont">
        <span>Presale Ends In</span>
      </div>
      <div className="counterContainer">
        <span className="time">{countdown.days}</span>
        <span className="time">: {formatNumber(countdown.hours)}</span>
        <span className="time">: {formatNumber(countdown.minutes)}</span>
        <span className="time">: {formatNumber(countdown.seconds)}</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
