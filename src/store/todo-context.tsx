import React, { PropsWithChildren, useState } from 'react';
import Todo from '../models/todo';

type contextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<contextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onClickAdd = (text: string) => {
    const newItem = {
      id: new Date().getMilliseconds().toString(),
      name: text,
    };
    setTodos((prev) => [...prev, newItem]);
  };

  const onClickRemove = (id: string) => {
    setTodos((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: onClickAdd,
    removeTodo: onClickRemove,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
