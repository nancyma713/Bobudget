import React from 'react';

const Calculator = ({ moneySpent, moneyLeft }) => {
  const remainingBobas = Math.floor(moneyLeft / 5.69).toString().slice(0, 1) === '-' ? '0' : Math.floor(moneyLeft / 5.69);
  const msg = moneyLeft.toString().slice(0, 1) === '-' ? 'You need to stop buying boba' : `You are boBallin on a budget!`;
  
  return (
    <div className="calculator">
      <div className="calc-screen center">
        According to our calculations...
        <br />
        <span className="calc-msg">{msg}</span>
        <br />
        You have about <span className='remainder'>{remainingBobas}</span> purchases left!
      </div>
      <div className="calc-buttons">
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
        <div className="button" />
      </div>
    </div>
  );
}

export default Calculator;