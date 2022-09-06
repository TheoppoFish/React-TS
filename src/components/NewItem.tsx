import React, { useRef } from 'react';

import classes from '../styles/newitem.module.css';

const NewItem: React.FC<{
  addNewItem: (text: string) => void;
}> = (props) => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const submissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.addNewItem(enteredText);
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
