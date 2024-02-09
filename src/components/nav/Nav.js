import React from 'react';
import '../../Variables.css';
import './Nav.css';
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
        <img src="" alt="" />

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
          $KIMBA Lunchpad
        </button>

        <button className="connect-button">Connect Wallet</button>
      </nav>
    </header>
  );
};

export default Nav;
