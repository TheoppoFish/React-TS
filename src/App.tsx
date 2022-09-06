import NewItem from './components/NewItem';
import Todos from './components/Todos';
import TodoContextProvider from './store/todo-context';

function App() {
  return (
    <TodoContextProvider>
      <NewItem />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
