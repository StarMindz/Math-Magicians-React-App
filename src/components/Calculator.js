/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);

  const updateScreen = (element) => {
    setState((state) => calculate(state, element.target.innerText));
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{state.next || state.result || 0}</span>
      </div>
      <div className="input">
        <button type="button className="button" onClick={updateScreen}>AC</button>
        <button type="button className="button" onClick={updateScreen}>+/-</button>
        <button type="button className="button" onClick={updateScreen}>%</button>
        <button type="button className="button special-button" onClick={updateScreen}>÷</button>
        <button type="button className="button" onClick={updateScreen}>7</button>
        <button type="button className="button" onClick={updateScreen}>8</button>
        <button type="button className="button" onClick={updateScreen}>9</button>
        <button type="button className="button special-button" onClick={updateScreen}>x</button>
        <button type="button className="button" onClick={updateScreen}>4</button>
        <button type="button className="button" onClick={updateScreen}>5</button>
        <button type="button className="button" onClick={updateScreen}>6</button>
        <button type="button className="button special-button" onClick={updateScreen}>-</button>
        <button type="button className="button" onClick={updateScreen}>1</button>
        <button type="button className="button" onClick={updateScreen}>2</button>
        <button type="button className="button" onClick={updateScreen}>3</button>
        <button type="button className="button special-button" onClick={updateScreen}>+</button>
        <button type="button className="button double-button" onClick={updateScreen}>0</button>
        <button type="button className="button" onClick={updateScreen}>.</button>
        <button type="button className="button special-button" onClick={updateScreen}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
