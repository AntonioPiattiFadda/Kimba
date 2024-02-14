import React from 'react';
import '../../Variables.css';
import './graphicBnb.css';

function GraphicBnb({ totalBnb, userBnb }) {
  const totalBnbWidth = 100;
  const userBnbWidth = (userBnb * 100) / totalBnb;

  return (
    <div>
      <div className="memoryBar">
        <div
          className="totalMemory"
          style={{
            width: `${totalBnbWidth}%`,
          }}
        >
          <div
            className="userMemory"
            style={{
              width: `${userBnbWidth}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="total">
        <p>{userBnb} BNB</p>
        <p>{totalBnb} BNB</p>
      </div>
    </div>
  );
}

export default GraphicBnb;
