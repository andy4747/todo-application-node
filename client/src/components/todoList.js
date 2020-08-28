import React, { useEffect, useState, Fragment } from "react";
import "./components.css";
import EditTask from "./editTodo";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      setTodoList(todoList.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getTodoList = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/list-todos");
      const allTodos = await response.json();
      // console.log(allTodos);
      setTodoList(allTodos);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  console.log(todoList);

  return (
    <Fragment>
      <table className="table mt-5">
        <tbody>
          {todoList.map((todos) => (
            <tr className="table-body" key={todos.todo_id}>
              <td>{todos.task}</td>
              <td>
                <EditTask todo={todos} />
              </td>
              <td>
                <button
                  className="delete btn btn-danger"
                  onClick={() => deleteTask(todos.todo_id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default TodoList;
