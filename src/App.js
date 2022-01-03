function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <label htmlFor="todo">New Todo:</label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="What needs to be done ...?"
      />
      <button type="submit">Add</button>
    </div>
  );
}

export default App;
