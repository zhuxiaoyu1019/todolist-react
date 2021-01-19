import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Todo from './todo';

const TodoList = ({ todos, setTodo }) => {
  return (
    <Grid container
      justify="center"
      alignItems="center" className="todolist-container">
      {todos.map(todo => (
        <Paper square className="todo-container">
          <Todo
            setTodo={setTodo}
            todo={todo}
            todos={todos}
            text={todo.text}
            key={todo.id} />
        </Paper>
      ))}
    </Grid>
  );
};

export default TodoList;
