import { paste } from '@testing-library/user-event/dist/paste';
import React from 'react';
import {AppUI} from "./AppUI"
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Tomar el curso de intro a React', completed: false},
//   { text: 'Llorar con la llorona', completed: false}

// ]

function App() {
  //variables de localStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  //condicionales para local storage
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //variables para los todos y el search value
  const [todos, setTodos] = React.useState(parsedTodos)
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
    saveTodos(newTodos);
  
  }

  //funcion para los eliminados:

  const deleteTodos = (text) => {
    const newTodos = [...todos]

    const todoIndex = todos.findIndex(todo => todo.text === text)
                              //desde donde queremos que borre, y cuantos elementos quereos que borre.
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  
  }

  //funcion puente entre local storage y nuestras funciones de complete y delete
  //esta funcion recibe como parametro al nuevo array de ToDos
  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    //creamos una variable que contiene a los todos en string
    localStorage.setItem("TODOS_V1",stringifiedTodos);
    //los seteamos en localstorage
    setTodos(newTodos)  
    //y los seteamos como nuevo estado.
  }


  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  )
}

export default App;
