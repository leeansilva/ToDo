import React, { Fragment } from "react";
import { todoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch () {
    const {searchValue, setSearchValue } = React.useContext(todoContext)

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
        </div>
        
        
    )
}

export { TodoSearch };