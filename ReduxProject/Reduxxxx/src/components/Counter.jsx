import React from "react";

import classes from "../components/Counter.module.css";
const Counter = () => {
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {<div className={classes.value}>{counter}</div>}
      <div>
        <button>Increment</button>
        <button>Increment 10</button>
        <button>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
