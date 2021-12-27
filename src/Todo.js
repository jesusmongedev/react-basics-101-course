import React from "react";

const Todo = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <form action="">
        <fieldset>
          <legend>User Form</legend>
          <label htmlFor="name">
            <span>Type your name:</span>
            <input type="text" name="name" id="name" />
          </label>
        </fieldset>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Todo;
