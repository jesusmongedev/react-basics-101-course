import { useEffect, useState } from "react";

const App = () => {
  // Inital state = actual window Width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = useState("");

  // useEffect On Every render
  useEffect(() => {
    console.log("I re-rendered");
  });

  // On first Render/Mount only! - componentDidMount Alternative
  useEffect(() => {
    console.log("The component Mounted");
  }, []);

  // On first Render + whenever dependancy ([] => dependancy list) changes! - componentDidUpdate Alternative
  useEffect(() => {
    console.log(`The todoInput changed!: ${inputValue}`);
  }, [inputValue]);

  //Follows the same rules, except this handles the unmounting on a component! - compnentWillUnmount Alternative
  useEffect(() => {
    //effect
    console.log(`The ageInput changed!: ${age}`);
    return () => {
      //cleanup
      console.log("We unmounted!");
    };
  }, [age]);

  // 1 Case - If we do this without a cleanup function
  //! When we run this function in the console => getEventListeners(window) // {resize: Array(78)}
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowWidth);
  // });

  //* This issue can harm our react app - Two ways to solve it:

  // 2 Case - Using a cleanup function that runs when the component unmount
  //! In this case is not ideal because behind the scenes is attaching and detaching every time the component Mount and Unmount
  // useEffect(() => {
  //   console.log("Attach listener");
  //   window.addEventListener("resize", updateWindowWidth);
  //   return () => {
  //     // When component unmounts, this cleanup code runs...
  //     console.log("Dettach listener");
  //     window.removeEventListener("resize", updateWindowWidth);
  //   };
  // });

  //* 3 Case - Using the dependancy list empty [] it only runs once when the component Mount ✅
  useEffect(() => {
    console.log("Attach listener");
    window.addEventListener("resize", updateWindowWidth);
  }, []);

  // set the new window.innerWidth to the state
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Handle Todo Input onChange
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>The useEffect Hook</h1>
        <h2>The window width is: {windowWidth} </h2>
        <input
          type="text"
          name="todo"
          value={inputValue}
          placeholder="Todo..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          placeholder="Age..."
          onChange={handleAge}
        />
      </center>
    </div>
  );
};

export default App;
