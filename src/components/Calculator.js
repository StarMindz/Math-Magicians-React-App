import React, { Component } from "react";
import Button from "./Button";

const buttonArr = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
class Calculator extends Component {
    state = {screen: '0'}

    updateScreen(value) {
        const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        if (digits.includes(value.item))
        {
            this.setState(state => ({
            screen: state.screen + value.item
            }))
        }
    }

    render() {
        return(
        <div className="calculator">
            <div className="display">{this.state.screen}</div>
            <div className="input"> 
            {buttonArr.map((item, index) => {
                return <div onClick={() =>this.updateScreen({item})}> <Button value={item}/> </div>
            })}
            </div>
        </div>
        )
    }
}

export default Calculator;