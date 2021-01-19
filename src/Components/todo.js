import React from "react";
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const Todo = ({ setTodo, todo, todos, text }) => {
  const deletHandler = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodo(
      todos.map((item) => {
        return item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );
  };
  return (
    <>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="group-btns">
        <Button
          startIcon={<CheckIcon />}
          onClick={completeHandler}>
        </Button>
        <Button
          startIcon={<ClearIcon />}
          onClick={deletHandler}>
        </Button>
      </div>
    </>
  );
};

export default Todo;
