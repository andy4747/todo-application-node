import React, { useState } from "react";
import "./components.css";

function InputTodo() {
  const [task, setTask] = useState("");

  const formSubmission = async (e) => {
    try {
      e.preventDefault();
      const body = { task };
      const response = await fetch("http://127.0.0.1:5000/create/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="lister">
      <form className="d-flex" onSubmit={formSubmission}>
        <input
          type="text"
          id="task_input"
          placeholder="Add a todo"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" className="btn btn-lg btn-primary " />
      </form>
    </div>
  );
}

export default InputTodo;
