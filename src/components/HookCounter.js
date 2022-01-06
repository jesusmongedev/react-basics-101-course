import { useEffect, useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect executed on first render");
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("Clean up function");
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounter;
