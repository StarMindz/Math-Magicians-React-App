import React, { Component } from "react";
import Button from "./Button";

const buttonArr = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {screen: '0'};
    }

    updateScreen(value) {
        console.log(value);
        console.log(this.state.screen);
        // console.log(this.state);
        // const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        // if (digits.includes(value))
        // {
        //     this.setState({screen: this.state.screen + value});
        // }
    }

    render() {
        return(
        <div className="calculator">
            <div className="display">{this.state.screen}</div>
            <div className="input"> 
            {buttonArr.map((item, index) => {
                // <div onClick={() =>this.updateScreen({item})}>  </div>  
                return <Button value={item} click={this.updateScreen}/>
            })}
            </div>
        </div>
        )
    }
}

export default Calculator;