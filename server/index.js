const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewares
app.use(cors());
app.use(express.json());

// endpoints

// List all todo
app.get("/list-todos", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM todo");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Create a todo
app.post("/create", async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = await pool.query(
      "INSERT INTO todo (task) VALUES ($1) RETURNING *",
      [task]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a toto
app.get("/list-todo/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a todo
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET task=$1 WHERE todo_id=$2 RETURNING *",
      [task, id]
    );
    res.json(updateTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a todo
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo where todo_id=$1 RETURNING *",
      [id]
    );
    res.json(deleteTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//express webserver listens to port 5000
app.listen(5000, () => {
  console.log("server has started");
});
