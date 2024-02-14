import '../../Variables.css';
import './payModule.css';
import { useState } from 'react';
import Kredict from '../../assets/Imagenes/kredict-k.png';
import BNB from '../../assets/Imagenes/BNB.png';
import USDT from '../../assets/Imagenes/USDT.png';
import BUSD from '../../assets/Imagenes/BUSD.png';
import USDC from '../../assets/Imagenes/USDC.png';
import VERIFIED from '../../assets/Imagenes/audited.png';
import AUDITED from '../../assets/Imagenes/verified.png';
import Link from '../../assets/Imagenes/open-outline.svg';

function PayModule({ walletBalance, percentage, number, stats }) {
  const [inputValue, setInputValue] = useState(0);
  const [amoutExceededMessage, setAmoutExceededMessage] = useState(false);

  const handleChange = (event) => {
    if (event.target.value > walletBalance) {
      setInputValue(walletBalance);
      setAmoutExceededMessage(true);
      setTimeout(() => {
        setAmoutExceededMessage(false);
      }, 3000);
      return;
    }
    setInputValue(event.target.value);
  };

  const handleMaxClick = () => {
    setInputValue(walletBalance);
  };

  

  return (
    <div className="payModule">
      <div className="infoContainer">
        <div className="secondContainer">
          <div>
            <div className="blackBorder">
              <div className="greenBorder">
                <img alt="Kredic Logo" className="logoKredict" src={Kredict} />
              </div>
            </div>
          </div>
          <div className="KredicContainer">
            <span className="kredict">KREDICT</span>
            <span className="sign">KDT / BNB</span>
            <button className="buttonView">View on Explorer</button>
          </div>
          <div className="validations">
            <span className="audited">
              {' '}
              <img
                alt="Audited Logo"
                src={AUDITED}
                className="imgAudited"
              />{' '}
              AUDITED
              <span></span>
            </span>
            <span className="verified">
              {' '}
              <img
                alt="Verified Logo"
                src={VERIFIED}
                className="imgAudited"
              />{' '}
              VERIFIED
              <span></span>
            </span>
          </div>
        </div>
        <div className="thirdContainer">
          <span className="secondTitle">Exchange Quantity</span>
          <div className="coinButtonContainer">
            <button className="coinButton">
              <img className="coinImg" alt="Bnb Logo" src={BNB} />
              <span className="bnbWord">BNB</span>
            </button>
            <button className="coinButton">
              {' '}
              <img className="coinImg" alt="Usdt Logo" src={USDT} />
              USDT
            </button>
            <button className="coinButton">
              {' '}
              <img className="coinImg" alt="Busd Logo" src={BUSD} />
              BUSD
            </button>
            <button className="coinButton">
              {' '}
              <img className="coinImg" alt="Usdc Logo" src={USDC} />
              USDC
            </button>
            <span className="amount">
              Your Wallet Balance is{' '}
              <span className="amountNumber">{walletBalance}</span> BNB
            </span>
          </div>
          <div className="maxInputDiv">
            {' '}
            <input
              className="input"
              type="number"
              value={inputValue}
              onChange={handleChange}
            />
            <button onClick={handleMaxClick} className="maxButton">
              Max
            </button>
            {amoutExceededMessage && (
              <span className="amoutExceededMessage">
                Amount exceeded available balance. Your maximum available amount
                is {walletBalance}
              </span>
            )}
          </div>
        </div>
        <div className="fourthContainer">
          <button className="approveButton">Approve & Buy</button>
          <span className="conversion">1 USDT {'->'} 20 KDT</span>
        </div>
        <div className="fifthContainer">
          <div className="data">
            <span className="active">Active</span>
            <span className="value">{percentage}%</span>
          </div>
          <div className="secondData">
            <span className="number">{number}</span>
            <span className="stats">Hard Cap: {stats} BNB</span>
          </div>
          <a href="/" className="linkPresale">
            View Presale Smart Contract Address
            <img alt="External Link" src={Link} />
          </a>
        </div>
      </div>
      <div className="buttonCointainer">
        <button className="button">Whitepaper</button>
        <button className="button">Roadmap</button>
        <button className="button">DEX</button>
        <button className="button">Website</button>
      </div>
    </div>
  );
}

export default PayModule;
