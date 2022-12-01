import React from "react";
import { todoContext } from "../App/TodoContext";
import './TodoCounter.css';


function TodoCounter() {
    const {totalTodos, completedTodos } = React.useContext(todoContext)
    return (
        <div className="containerCounter">
            <h2>Home tasks ({totalTodos})</h2>
            <h3> {totalTodos - completedTodos} tasks left.</h3>
        </div>
        
    )
}

export { TodoCounter };

// Usando export y llaves { }, nos obligamos a nombrar, cuando querramos importar este componente. Yaque usando default, podemos equivocarnos de nombre de componente.