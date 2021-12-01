import React from "react";

const CounterState = () => {
  const [counter, setCounter] = React.useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>Pressed {counter}</p>
      <button onClick={() => increaseCounter()} > + </button>
      <button onClick={() => decreaseCounter()} > - </button>
    </>
  );
};

export { CounterState };