import React, { useState } from 'react';
import './faq.css';
import Arrow from '../../assets/Imagenes/chevron-forward-outline.svg';

function Faq() {
  const [open, setOpen] = useState(false);

  const handleClick = (question) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [question]: !prevOpen[question],
    }));
  };

  return (
    <div className="containerFaq">
      <p>Frequently Asked Questions</p>

      <div className="line">
        <span onClick={() => handleClick('KYC')} className="question">
          <img src={Arrow} className="arrowRight" alt="arrow down" />
          What is KYC?
        </span>
        <div className={open['KYC'] ? 'open answer' : 'answer'}>
          Information 1
        </div>
      </div>

      <div className="line">
        <span onClick={() => handleClick('Audit')} className="question">
          <img src={Arrow} className="arrowRight" alt="arrow down" />
          What is an Audit?
        </span>
        <div className={open['Audit'] ? 'open answer' : 'answer'}>
          Information 2
        </div>
      </div>

      <div className="line">
        <span onClick={() => handleClick('SAFU')} className="question">
          <img src={Arrow} className="arrowRight" alt="arrow down" />
          What is SAFU?
        </span>
        <div className={open['SAFU'] ? 'open answer' : 'answer'}>
          Information 3
        </div>
      </div>

      <div className="line">
        <span onClick={() => handleClick('Doxx')} className="question">
          <img src={Arrow} className="arrowRight" alt="arrow down" />
          What is Doxx?
        </span>
        <div className={open['Doxx'] ? 'open answer' : 'answer'}>
          Information 4
        </div>
      </div>

      <div className="line">
        <span onClick={() => handleClick('DYOR')} className="question">
          <img src={Arrow} className="arrowRight" alt="arrow down" />
          What is DYOR?
        </span>
        <div className={open['DYOR'] ? 'open answer' : 'answer'}>
          Information 5
        </div>
      </div>
    </div>
  );
}

export default Faq;
