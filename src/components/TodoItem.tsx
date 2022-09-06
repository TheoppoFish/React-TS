import { Fragment, useContext } from 'react';

import classes from '../styles/TodoItem.module.css';
import { TodoContext } from '../store/todo-context';

const TodoItem = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <Fragment>
      {todoCtx.items.map((item) => (
        <li key={item.id} className={classes.item}>
          <input type='checkBox' id={item.id} />
          <label>{item.name}</label>
          <button id={item.id} onClick={todoCtx.removeTodo.bind(null, item.id)}>
            Delete
          </button>
        </li>
      ))}
    </Fragment>
  );
};

export default TodoItem;
