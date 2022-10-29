import React, { Component } from 'react';
import Button from './Button';

class Calculator extends Component {

  render() {
    return (
      <div className="calculator">
        <div className="display">0</div>
        <div className="input">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="x" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" />
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;