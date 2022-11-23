import React from "react";
import './TodoSearch.css';

function TodoSearch() {
    const onChangeSearchValue = (e)=>{
        console.log(e.target.value);
    }
    return (
        <div className="TodoDiv">
            <input 
            placeholder='Cebolla' 
            onChange={onChangeSearchValue}
            />
        </div>
    )
}

export { TodoSearch };