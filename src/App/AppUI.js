import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton} from '../CreateTodoButton'
import { todoContext } from './TodoContext'
import { Modal } from "../Modal"



function AppUI(){
  const {error, 
    loading, 
    searchedTodos, 
    completeTodos,
    deleteTodos} = React.useContext(todoContext);
    
    return(
        <React.Fragment>
        <TodoCounter />
        
        <TodoSearch />
       
                <TodoList>
                {/* le hacemos un map a searchedTodos porque sino cumplen con la condicion es lo mismo que default todos, y si cumple la condicion, mostramos solo los que filtramos y se meten dentro del array vacio gracias al return */}
               {error && <p>Desesperante error</p>}
               {loading && <p>Estamos cargando, no desesperes</p>}
               {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
    
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
          //     propiedad especial que se llama "key", a nuestros componentes. Esto es para que react pueda identificar cual componente
          //     es cual dentro de una lista. Y asi nos evite renders innecesarios, cuando un elemento no debe cambiar. Debemos enviarle un 
          // identificador unico a cada uno de nuestro elemento. */}
              
          <Modal>
            {/* El signo de pregunta esta preguntando si existe la propiedad, antes de imprimir.text */}
            <h3>{searchedTodos[0]?.text}</h3>
          </Modal>

        

        <CreateTodoButton />
        
   </React.Fragment>
    );
}

export { AppUI }