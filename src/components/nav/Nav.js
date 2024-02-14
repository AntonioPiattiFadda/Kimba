import React from 'react';
import '../../Variables.css';
import './Nav.css';
import Logo from '../../assets/Imagenes/kimba.png';

const Nav = ({ setStaking }) => {
  const handleClick = (e) => {
    if (e.target.name === 'Staking') {
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
          <button
            className="staking-button"
            name="Staking"
            onClick={handleClick}
          >
            $KIMBA Staking
          </button>
          <button
            className="launchpad-button"
            name="Launchpad"
            onClick={handleClick}
          >
            $KIMBA Launchpad
          </button>
        </div>

        <button className="connect-button">Connect Wallet</button>
      </nav>
    </header>
  );
};

export default Nav;
