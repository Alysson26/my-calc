import './App.css';
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
  
    <div class="calculator">

      <input  class="screen"type="text" value={input} disabled />
      <br />
      <br />
      <div class="buttons">
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br />
      <button onClick={clear}>CR</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleClick("/")}>/</button>
     
    </div>
    
    </div>
    
  );
};

export default Calculator;