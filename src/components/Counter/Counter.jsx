import React from "react";
import { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Button
        className="incrementButton"
        title={"increment"}
        onClick={increment}
      />
      <h1 className="digits">{count}</h1>
      <Button
        className="decrementButton"
        title={"decrement"}
        onClick={decrement}
      />
    </div>
  );
};

export default Counter;
