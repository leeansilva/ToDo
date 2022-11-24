import React from "react";
import './TodoItem.css';

// Por cada elemento dentro del Array, se va  acrear un nuevo li y con todo su respectivos elementos.

function TodoItem(props) {

   const onDelete= () =>{
    alert('Eliminaste el ToDo: ' + props.text)
   }
    return (
        <li className="TodoItemLi">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}

            // llamamos a la fucion hecha en app js, cada vez que demos click
            onClick={props.onComplete}
            >✔</span>
            {/* metemos el texto obtenido del map al array "todos" dentro de un p */}
             <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
             >{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };

