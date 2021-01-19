import React, { useState, useEffect } from "react";
import "./App.css"
import Form from "./Components/form";
import TodoList from "./Components/todolist";
import Grid from '@material-ui/core/Grid';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [state, setState] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, state]);

  const filterHandler = () => {
    switch (state) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodo(todoLocal);
    }
  }

  return (
    <>
      <Grid container
        className="outter-container"
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <h1>Todo List</h1>
        </Grid>
        <Form
          inputText={inputText}
          todos={todos}
          setTodo={setTodo}
          setInputText={setInputText}
          setState={setState}
        />
        <TodoList setTodo={setTodo} todos={filteredTodos} />
      </Grid>
    </>
  );
}

export default App;
