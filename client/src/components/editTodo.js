import React, { useState, Fragment } from "react";
import "./components.css";

function EditTask({ todo }) {
  const [task, setTask] = useState(todo.task);
  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const body = { task };
      const response = await fetch(
        `http://127.0.0.1:5000/update/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        <i className="fas fa-pencil-alt"></i>
      </button>

      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        onClick={() => setTask(todo.task)}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setTask(todo.task)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text form-control"
                style={{
                  width: "100%",
                  height: "5vh",
                  border: "2px solid #808080",
                  borderRadius: "5px",
                }}
                placeholder="Update your todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setTask(todo.task)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => updateTask(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTask;
