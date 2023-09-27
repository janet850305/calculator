import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

function Calculator() {
  const [myValue,setMyValue]=useState(null);
  const [operant,setOperant]=useState("");
  const [temp,setTemp] = useState(null);
  const [operantTag,setOperantTag] = useState(false);
function handleOperator(value){
  if(operantTag==false){
    value = myValue * 10 + value
    setMyValue(value)
  }
  else{
    setMyValue(value)
    setOperantTag(false)
  }
}
function handleOperant(value){
  if(temp==null){
    setOperant(value)
    setTemp(myValue)
    setOperantTag(true)
  }
  else{
    if(operant=="+"){
      value = temp + myValue
      setMyValue(value)
      setOperantTag(true)
    }
    else if(operant == "-"){
      value = temp - myValue
      setMyValue(value)
      setOperantTag(true)
    }
    else if(operant == "*"){
      value = temp * myValue
      setMyValue(value)
      setOperantTag(true)
    }
    else{
      value = temp / myValue
      setMyValue(value)
      setOperantTag(true)
    }
  }
}
function handleClear(){
  setOperant("")
  setTemp(null)
  setMyValue(0)
}
  return (
    <div>
      <div className='board'>{myValue}</div>
      <div>
        <button className='operant' onClick={() =>handleOperant("+")}>+</button>
        <button className='operator' onClick={() =>handleOperator(1)} >1</button>
        <button className='operator'onClick={() =>handleOperator(2)}>2</button>
        <button className='operator'onClick={() =>handleOperator(3)}>3</button>
      </div>
      <div>
        <button className='operant'onClick={() =>handleOperant("-")}>-</button>
        <button className='operator'onClick={() =>handleOperator(4)}>4</button>
        <button className='operator'onClick={() =>handleOperator(5)}>5</button>
        <button className='operator'onClick={() =>handleOperator(6)}>6</button>
      </div>
      <div>
        <button className='operant'onClick={() =>handleOperant("*")}>*</button>
        <button className='operator'onClick={() =>handleOperator(7)}>7</button>
        <button className='operator'onClick={() =>handleOperator(8)}>8</button>
        <button className='operator'onClick={() =>handleOperator(9)}>9</button>
      </div>
      <div>
        <button className='operant'onClick={() =>handleOperant("/")}>/</button>
        <button className='zero'onClick={() =>handleOperator(0)}>0</button>
        <button className='clean'onClick={() =>handleClear()}>C</button>

      </div>
    </div>
  );
}

export default Calculator;
