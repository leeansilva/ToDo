import React, { Fragment } from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue}) {
    const onChangeSearchValue = (e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value)

    }
    return (
        
        <div className="TodoDiv">
            <input 
            placeholder='Cebolla'
            value={searchValue} 
            onChange={onChangeSearchValue}
            />
            <p>{searchValue}</p>
        </div>
        
        
    )
}

export { TodoSearch };