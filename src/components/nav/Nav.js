import React from 'react';
import '../../Variables.css';
import './Nav.css';
import Logo from '../../assets/Imagenes/kimba.png';

const Nav = ({ setStacking }) => {
  const handleClick = (e) => {
    if (e.target.name === 'Stacking') {
      setStacking(true);
    } else {
      setStacking(false);
    }
  };

  return (
    <header>
      <nav className="nav">
        <img className="logoKimba" src={Logo} alt="Logo Kimba" />

        <div className="centralButtons">
          <button
            className="stacking-button"
            name="Stacking"
            onClick={handleClick}
          >
            $KIMBA Stacking
          </button>
          <button
            className="lunchpad-button"
            name="Lunchpad"
            onClick={handleClick}
          >
            $KIMBA LunchPad
          </button>
        </div>

        <button className="connect-button">Connect Wallet</button>
      </nav>
    </header>
  );
};

export default Nav;
