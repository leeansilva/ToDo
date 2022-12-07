import React from "react";
import { useLocalStorage } from "./UseLocalStorage"

const todoContext = React.createContext();

function TodoProvider(props){

    // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
     //variables de uselocalStorage
  //renombramos item y saveItem

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[])
  //variables para los todos y el search value
  
  const [searchValue, setSearchValue] = React.useState('')
  //variable para modal.
  const [openModal, setOpenModal] = React.useState(false)

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

  
  const addTodo = (text) => {
    const newTodos = [...todos];   
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  
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

    return(

        //Este provider, va a contener a toda nuestra aplicacion.
        <todoContext.Provider
        //Todas las propiedades que querramos compartir, deben estar en "value", y como en este caso vamos a compartir varias propiedades, vamos a utilizar un objeto (Por eso los dobles corchetes.)
        value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal,
        }}>
            {/* Sin importar que componente llamemos vamos a poder enviarlo aquí, Y estos componentes van a poder utilizar nuestro consumidor. */}
            {props.children}
        </todoContext.Provider>
    );
}


<todoContext.Consumer></todoContext.Consumer>

export { todoContext, TodoProvider };