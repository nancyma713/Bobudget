import React from 'react';

const Calculator = ({ moneySpent, moneyLeft }) => {
  const remainingBobas = Math.floor(moneyLeft / 5.69);
  const msg = moneyLeft.toString().slice(0, 1) === '-' ? 'You need to stop buying boba' : `You are boBallin on a budget! You have about ${remainingBobas} purchases left!`;

  
  return (
    <div className="calculator">
      <div className="calc-screen center">
        According to our calculations...
        <br />
        <span className="calc-msg">{msg}</span>
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