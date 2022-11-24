import React from "react";
import './TodoCounter.css';


function TodoCounter({total, completed}) {
    return (
        <div className="containerCounter">
            <h2>Home tasks ({total})</h2>
            <h3> {total - completed} tasks left.</h3>
        </div>
        
    )
}

export { TodoCounter };

// Usando export y llaves { }, nos obligamos a nombrar, cuando querramos importar este componente. Yaque usando default, podemos equivocarnos de nombre de componente.