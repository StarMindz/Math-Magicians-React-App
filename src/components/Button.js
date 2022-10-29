import React, { Component } from "react";

class Button extends Component {
  state = { operators: ["=", "-", "+", "x", "/", ""] };

  render() {
    if (this.props.value === "0") {
      return <div className="double-button button">{this.props.value}</div>;
    } else {
      return (
        <div
          className={
            this.state.operators.includes(this.props.value)
              ? "special-button"
              : "button"
          }
        >
          {this.props.value}
        </div>
      );
    }
  }
}

export default Button;
