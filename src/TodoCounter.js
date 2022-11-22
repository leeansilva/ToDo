import React from "react";
import './TodoCounter.css';


function TodoCounter() {
    return (
        <div className="containerCounter">
            <h2>Home tasks</h2>
            <h3> 3 tasks left.</h3>
        </div>
        
    )
}

export { TodoCounter };

// Usando export y llaves { }, nos obligamos a nombrar, cuando querramos importar este componente. Yaque usando default, podemos equivocarnos de nombre de componente.