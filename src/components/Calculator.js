/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);

  const updateScreen = (element) => {
    setState((state) => calculate(state, element.target.innerText));
  }

  return (
    <div className="calculator">
      <div className="display">
        <span>{state.next || state.result || 0}</span>
      </div>
      <div className="input">
        <div className="button" onClick={updateScreen}>AC</div>
        <div className="button" onClick={updateScreen}>+/-</div>
        <div className="button" onClick={updateScreen}>%</div>
        <div className="button special-button" onClick={updateScreen}>÷</div>
        <div className="button" onClick={updateScreen}>7</div>
        <div className="button" onClick={updateScreen}>8</div>
        <div className="button" onClick={updateScreen}>9</div>
        <div className="button special-button" onClick={updateScreen}>x</div>
        <div className="button" onClick={updateScreen}>4</div>
        <div className="button" onClick={updateScreen}>5</div>
        <div className="button" onClick={updateScreen}>6</div>
        <div className="button special-button" onClick={updateScreen}>-</div>
        <div className="button" onClick={updateScreen}>1</div>
        <div className="button" onClick={updateScreen}>2</div>
        <div className="button" onClick={updateScreen}>3</div>
        <div className="button special-button" onClick={updateScreen}>+</div>
        <div className="button double-button" onClick={updateScreen}>0</div>
        <div className="button" onClick={updateScreen}>.</div>
        <div className="button special-button" onClick={updateScreen}>=</div>
      </div>
    </div>
    );
  }
}

export default Calculator;
