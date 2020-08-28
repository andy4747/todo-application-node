import React, { Fragment } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import InputTodo from "./components/inputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <h1 className="text-center">Todo App</h1>
        </div>
        <InputTodo />
        <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
