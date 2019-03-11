import React, { Component } from 'react';
import './Calc.css';

class Calc extends Component{
  constructor(){
  super()
  this.state={
    display: "0",
    current: "0"
  }}
  
  
  clear = () => {
    this.setState({
      display: "0",
      current: "0"
    })
  }
     
updateDisplay = (text) => {
 const length = this.state.display.length - 1;
 const display = this.state.display;

 if(display[length] === "+" || display[length] === "*"|| display[length] === "-" || display[length] === "/"){
   console.log("1")
   const dis = display.slice(0, -1)
   console.log(dis)
   this.setState({
     display: dis + text,
     current: "0",
   })
   return
 }
 if (this.state.display === "0"){
        this.setState({
          display: text,
          current: "0"
        })     
  }
      else {
      this.setState({
        display: this.state.display + text,
        current: "0"
      })
        console.log(this.state.current)
      }}
    
calculate = () => {
const result = +eval(this.state.display).toFixed(4);
  this.setState({
    display: result.toString(),
    current: result.toString()
  })
}

updateDecimal = (dec) => {
  console.log(this.state.current)
  if (this.state.current.includes(".")){
    return
  }
  else {
      this.setState({
        display: this.state.display + dec,
        current: this.state.current + dec,
      })
}}
  
  render(){
    const numbers = [
      {num: "7",
       id: "seven"},
      {num: "8",
       id: "eight"},
      {num: "9",
       id: "nine"},
      {num: "4",
       id: "four"},
      {num: "5",
       id: "five"},
      {num: "6",
       id: "six"},
      {num: "1",
       id: "one"},
      {num: "2",
       id: "two"},
      {num: "3",
       id: "three"},
      {num: "0",
       id: "zero"},
    ]
    const Numbers = numbers.map((num) => {
      return (
      <div id={num.id} className="cursor" onClick={ () => {
        if (this.state.display === "0"){
          this.setState({
            display: num.num,
            current: num.num
          })
          
        }
        else {
        this.setState({
          display: this.state.display + num.num,
          current: this.state.current + num.num,
        })
        }
      }}> {num.num} </div>
      )
    })
  
    return(
    <div className="center-grid">
    <div className="calculator-grid">
      <div id="display">{this.state.display}</div>
      <div className="cursor" id="equals" onClick={() => this.calculate()}>=</div>
      <div className="cursor" id="clear" onClick={() => this.clear()}>AC</div>
      <div className="cursor" id="multiply" onClick={() => this.updateDisplay("*")}>x</div>
      <div className="cursor" id="divide" onClick={() => this.updateDisplay("/")}>/</div>
      <div className="cursor" id="add" onClick={() => this.updateDisplay("+")}>+</div>
      <div className="cursor" id="subtract" onClick={() => this.updateDisplay("-")}>-</div>
      {Numbers}
      <div className="cursor" id="decimal" onClick={() => this.updateDecimal(".")}>.</div>
      <div id="filler"> A calculator by Tom.</div>
    </div>
    </div>
    )
  }
}

export default Calc