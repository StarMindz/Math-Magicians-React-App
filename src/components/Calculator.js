// eslint-disable-line jsx-a11y/no-static-element-interactions
import React, { Component } from "react";
import calculate from "../logic/calculate";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateScreen = this.updateScreen.bind(this);
  }

  updateScreen(element) {
    this.setState((state) => calculate(state, element.target.innerText));     
  }

  render() {
    const { next, result } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <span>{next || result || 0}</span>
        </div>
        <div className="input"> 
          <div className="button" onClick={this.updateScreen}>AC</div>
          <div className="button" onClick={this.updateScreen}>+/-</div>
          <div className="button" onClick={this.updateScreen}>%</div>
          <div className="button special-button" onClick={this.updateScreen}>÷</div>
          <div className="button" onClick={this.updateScreen}>7</div>
          <div className="button" onClick={this.updateScreen}>8</div>
          <div className="button" onClick={this.updateScreen}>9</div>
          <div className="button special-button" onClick={this.updateScreen}>x</div>
          <div className="button" onClick={this.updateScreen}>4</div>
          <div className="button" onClick={this.updateScreen}>5</div>
          <div className="button" onClick={this.updateScreen}>6</div>
          <div className="button special-button" onClick={this.updateScreen}>-</div>
          <div className="button" onClick={this.updateScreen}>1</div>
          <div className="button" onClick={this.updateScreen}>2</div>
          <div className="button" onClick={this.updateScreen}>3</div>
          <div className="button special-button" onClick={this.updateScreen}>+</div>
          <div className="button double-button" onClick={this.updateScreen}>0</div>
          <div className="button" onClick={this.updateScreen}>.</div>
          <div className="button special-button" onClick={this.updateScreen}>=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
