import { useState } from 'react';
import NewItem from './components/NewItem';
import Todos from './components/Todos';
import todo from './models/todo';

function App() {
  const [list, setList] = useState<todo[]>([]);
  const handleClick = (text: string) => {
    const newItem = {
      id: new Date().getMilliseconds().toString(),
      name: text,
    };
    setList((prev) => [...prev, newItem]);
  };

  const onClickRemove = (id: string) => {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };
  return (
    <div className='App'>
      <NewItem addNewItem={handleClick} />
      <Todos items={list} clickToDelete={onClickRemove} />
    </div>
  );
}

export default App;
