/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { operators: ['=', '-', '+', 'x', '/', ''] };
  }

  render() {
    const {value} = this.props;
    if (value === '0') {
      return <div className="double-button button">{ value }</div>;
    }
    return (
      <div
          className={
            this.state.operators.includes(value)
              ? 'special-button'
              : 'button'
          }
        >
          {value}
        </div>
      );
  }
}

export default Button;
