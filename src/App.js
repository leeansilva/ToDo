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
  //variables para los todos y el search value
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  //variables para todoItem
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  //array vacio para llenarlo con las validaciones
  let searchedTodos = [];


  // validaciones para el buscador 

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      //estamos llamandoa c/u de los todos, y x c/u estamos convirtiendo su texto en minusculas

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      //Le preguntamos a search si hay algo de lo que escribimos
      return todoText.includes(searchText)
    })
  }

  //funcion para los todosCompletados

  const completeTodos = (text) => {
    //para poder modificar la lista de todos(Ya que no podemos modificar el array de defaul todos directamente), hacemos una copia
    const newTodos = [...todos]

    //por cada todo, vamos a pedir a findIndex, que nos filtre a los todos que tengan el texto, igual al texto que le pasemos cuando llamemos la funcion
    const todoIndex = todos.findIndex(todo => todo.text === text)
    //accedemos a esa posicion y le modificamos el complete:
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  
  }

  //funcion para los eliminados:

  const deleteTodos = (text) => {
    const newTodos = [...todos]

    const todoIndex = todos.findIndex(todo => todo.text === text)
                              //desde donde queremos que borre, y cuantos elementos quereos que borre.
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  
  }

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

        {/*  le hacemos un map a searchedTodos porque sino cumplen con la condicion es lo mismo que default todos, y si cumple la condicion, mostramos solo los que filtramos y se meten dentro del array vacio gracias al return */}

          {  searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}

            // pasamos como propiedad la funcion, para luego usarla dentro del componente todo item, mediante props.onComplete
            onComplete={() => completeTodos(todo.text)}
            onDelete={()=> deleteTodos(todo.text)}
            />
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
