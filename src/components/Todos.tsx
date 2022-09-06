import { Fragment } from 'react';
import TodoItem from './TodoItem';

import classes from '../styles/todos.module.css';

const Todos = () => {
  return (
    <Fragment>
      <h2 className={classes.todos}>Todo-List</h2>
      <ul className={classes.todos}>
        <TodoItem />
      </ul>
    </Fragment>
  );
};

export default Todos;
