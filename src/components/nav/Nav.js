import React, { useContext, useEffect } from "react";
import "../../Variables.css";
import "./Nav.css";
import Logo from "../../assets/Imagenes/kimba.png";
import { useWeb3Context } from "../../context/Web3Context";

const Nav = ({ setStaking }) => {
  const { web3, isConnected, account, connectWallet } = useWeb3Context();

  const handleClick = (e) => {
    if (e.target.name === "Staking") {
      setStaking(true);
    } else {
      setStaking(false);
    }
  };

  return (
    <header>
      <nav className="nav">
        <img className="logoKimba" src={Logo} alt="Logo Kimba" />

        <div className="centralButtons">
          <button className="staking-button" name="Staking" onClick={handleClick}>
            $KIMBA Staking
          </button>
          <button className="launchpad-button" name="Launchpad" onClick={handleClick}>
            $KIMBA Launchpad
          </button>
        </div>
        {isConnected ? (
          <button className="connect-button" disabled>
            Connected: {account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : "Not connected"}
          </button>
        ) : (
          <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
        )}
      </nav>
    </header>
  );
};

export default Nav;
