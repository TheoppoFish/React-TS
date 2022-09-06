import { Fragment } from 'react';
import todo from '../models/todo';

import classes from '../styles/TodoItem.module.css';

const TodoItem: React.FC<{
  items: todo[];
  clickToDelete: (id: string) => void;
}> = (props) => {
  return (
    <Fragment>
      {props.items.map((item) => (
        <li key={item.id} className={classes.item}>
          <input type='checkBox' id={item.id} />
          <label>{item.name}</label>
          <button
            id={item.id}
            onClick={props.clickToDelete.bind(null, item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </Fragment>
  );
};

export default TodoItem;
