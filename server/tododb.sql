CREATE DATABASE todo-pern;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    status BOOLEAN
);

INSERT INTO todo(task,status) VALUES ('learn express',false);

UPDATE 