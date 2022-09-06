import { Fragment } from 'react';
import todo from '../models/todo';
import TodoItem from './TodoItem';

import classes from '../styles/todos.module.css';

const Todos: React.FC<{
  items: todo[];
  clickToDelete: (id: string) => void;
}> = (props) => {
  return (
    <Fragment>
      <h2 className={classes.todos}>Todo-List</h2>
      <ul className={classes.todos}>
        <TodoItem items={props.items} clickToDelete={props.clickToDelete} />
      </ul>
    </Fragment>
  );
};

export default Todos;
