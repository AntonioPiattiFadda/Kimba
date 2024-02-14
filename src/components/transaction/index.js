import React, { useState } from 'react';
import './transaction.css';
import Copy from '../../assets/Imagenes/copy-outline.svg';

function Transaction() {
  const [coppiedLink, setCoppiedLink] = useState({
    coppiedPresaleLink: false,
    coppiedTokenAdress: false,
  });
  const [transaction, setTransaction] = useState({
    presaleAdress: 0xd78241521946bf,
    tokenName: 'PepeFork INU',
    tokenSymbol: 'PorkINU',
    tokenDecimals: 9,
    tokenAdress: 0xd785215b5452,
    totalSupply: '420,000,000,000,000',
    tokensForPresale: '254,631,100,000,000',
    tokensForLiquidity: '123,368,767,950,000',
    softCap: '1 BNB',
    presaleStartTime: '2024.02.04 17:00(UTC)',
    presaleEndTime: '2024.02.05 18:00(UTC)',
    listingOn: 'Pancakeswap',
    liquidityPercent: '51%',
    liquidityLockupTime: '180 days after pool ends',
  });
  const handleCopy = (TextToCopy) => {
    navigator.clipboard.writeText(TextToCopy);

    if (TextToCopy === transaction.presaleAdress) {
      setCoppiedLink((prevState) => ({
        ...prevState,
        coppiedPresaleLink: true,
      }));
    } else {
      setCoppiedLink((prevState) => ({
        ...prevState,
        coppiedTokenAdress: true,
      }));
    }
    setTimeout(() => {
      setCoppiedLink({
        coppiedPresaleLink: false,
        coppiedTokenAdress: false,
      });
    }, 2000);
  };

  return (
    <div className="grandContainer">
      <div className="transactionInfo">
        <span>Presale Adress</span>
        <span className="transactionPA">
          {transaction.presaleAdress}
          <img
            onClick={() => handleCopy(transaction.presaleAdress)}
            alt="copy"
            src={Copy}
          />
          {coppiedLink.coppiedPresaleLink && (
            <span className="coppiedPresaleLink">Coppied</span>
          )}
        </span>
      </div>
      <div className="transactionInfo">
        <span>Token Name</span>
        <span>{transaction.tokenName}</span>
      </div>
      <div className="transactionInfo">
        <span>Token Symbol</span>
        <span>{transaction.tokenSymbol}</span>
      </div>
      <div className="transactionInfo">
        <span>Token Decimals</span>
        <span>{transaction.tokenDecimals}</span>
      </div>
      <div className="transactionInfo">
        <span>Token Adress</span>
        <span className="transactionTA">
          {transaction.tokenAdress}
          <img
            onClick={() => handleCopy(transaction.tokenAdress)}
            alt="copy"
            src={Copy}
          />
          {coppiedLink.coppiedTokenAdress && (
            <span className="coppiedPresaleLink">Coppied</span>
          )}
        </span>
      </div>
      <div className="transactionInfo">
        <span></span>
        <span className="transactionWarningMessage">
          (Do not send BNB to the token adress!)
        </span>
      </div>
      <div className="transactionInfo">
        <span>Total Supply</span>
        <span>{transaction.totalSupply}</span>
      </div>
      <div className="transactionInfo">
        <span>Tokens For Presale</span>
        <span>{transaction.tokensForPresale}</span>
      </div>
      <div className="transactionInfo">
        <span>Tokens For Liquidity</span>
        <span>{transaction.tokensForLiquidity}</span>
      </div>
      <div className="transactionInfo">
        <span>Soft Cap</span>
        <span>{transaction.softCap}</span>
      </div>
      <div className="transactionInfo">
        <span>Presale Start Time</span>
        <span>{transaction.presaleStartTime}</span>
      </div>
      <div className="transactionInfo">
        <span>Presale End Time</span>
        <span>{transaction.presaleEndTime}</span>
      </div>
      <div className="transactionInfo">
        <span>Listing On</span>
        <span className="transactionLO">{transaction.listingOn}</span>
      </div>
      <div className="transactionInfo">
        <span>Liquidity Percent</span>
        <span>{transaction.liquidityPercent}</span>
      </div>
      <div className="transactionInfo">
        <span>Liquidity Lockup Time</span>
        <span>{transaction.liquidityLockupTime}</span>
      </div>
    </div>
  );
}

export default Transaction;
