import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  // Input Todo Value
  const [inputValue, setInputValue] = useState("");
  // Handle Todo Input onChange
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // Handle Add New Todo
  const handleAddTodo = (e) => {
    // console.log(`This is the inputValue ${inputValue}`);
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <form>
        <label htmlFor="todo">New Todo:</label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="What needs to be done ...?"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <h2>Your Todo list:</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default App;
