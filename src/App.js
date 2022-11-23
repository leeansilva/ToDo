import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem.';
import { CreateTodoButton} from './CreateTodoButton'
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false}

]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
   <React.Fragment>
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}

        // le pasamos las props, para que el componente las lea como valores para useState. Los sacamos del componente search y lo escribimos aca por un tema de optimizacion y no abusar de los re-renders.

        />

        
        <TodoList>
        {/* Hacemos un .map, del array de todos, en el que se van a crear TodoItem, por cada elemento
        dentro del array. Pasamos como propiedad "text", para usarlo en el componente TodoItem y rellenar campos nece-
        sarios con esa informacion */}


          {  todos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
          ))}
        </TodoList>
        {/* Cuando hacemos este tipo de cosas de renderizar componentes en una lista con .map, Tenemos que enviarle una 
        propiedad especial que se llama "key", a nuestros componentes. Esto es para que react pueda identificar cual componente
        es cual dentro de una lista. Y asi nos evite renders innecesarios, cuando un elemento no debe cambiar. Debemos enviarle un 
        identificador unico a cada uno de nuestro elemento. */}

        <CreateTodoButton />
        
   </React.Fragment>
  );
}

export default App;
