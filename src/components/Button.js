import React, { Component } from "react";

class Button extends Component {
    

    constructor(props) {
        super(props)
        this.state = {operators: ['=', '-', '+', 'x', '/', '']};
    }

    render() {
    if (this.props.value === '0') {return <div onClick={() =>this.props.click(this.props.value)} className="double-button button">{this.props.value}</div>}
    else {return <div onClick={() =>this.props.click(this.props.value)} className={this.state.operators.includes(this.props.value)? 'special-button':'button'}>{this.props.value}</div>}}
}

export default Button;