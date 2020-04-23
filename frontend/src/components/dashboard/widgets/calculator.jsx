import React from 'react';

const Calculator = ({ moneySpent, moneyLeft }) => {
  const msg = moneyLeft.toString().slice(0, 1) === '-' ? 'You need to stop buying boba' : 'You are boBallin on a budget!';

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