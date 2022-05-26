import React, { useState, useEffect } from "react";
import {
  FaMoon,
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
  FaAngleRight,
} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const reduce = () => {
    setCount(count - 1);
  };
  const reset = () => {
    let check = window.confirm("Are you sure you want to reset the count?");
    if (check === true) {
      setCount(0);
    }
  };
  const move = () => {
    const btn = document.querySelector(".dark");
    const bg = document.querySelector("body");
    btn.classList.toggle("light");
    bg.classList.toggle("bgdark");
  };

  return (
    <div className="container">
      <div className="darkLight">
        <span className="dark" onClick={move}>
          <FaMoon />
        </span>
      </div>
      <div className="header">
        <h1>
          Simple <span className="primary">Counter</span> App
        </h1>
      </div>
      <div className="counter">
        <button className="btn minus" onClick={reduce}>
          <FaArrowLeft />
        </button>
        <h5 className="val">{count}</h5>
        <button className="btn plus" onClick={plus}>
          <FaArrowRight />
        </button>
        <button className="btn reset" onClick={reset}>
          <FaRedo />
        </button>
      </div>
      <div className="footer">
        Designed & Developed by <span className="primary">Collins</span>
      </div>
    </div>
  );
}

export default App;
