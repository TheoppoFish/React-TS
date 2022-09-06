import React, { useRef, useContext } from 'react';
import { TodoContext } from '../store/todo-context';

import classes from '../styles/newitem.module.css';

const NewItem = () => {
  const todoCtx = useContext(TodoContext);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submissionHandler} className={classes.form}>
      <label htmlFor='text' className={classes.label}>
        Todo Text
      </label>
      <input type='text' ref={inputTextRef} className={classes.input} />
      <button className={classes.button}>Add</button>
    </form>
  );
};
export default NewItem;
