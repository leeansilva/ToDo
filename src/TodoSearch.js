import React, { Fragment } from "react";
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchValue = (e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value)

    }
    return (
        <Fragment>
        <div className="TodoDiv">
            <input 
            placeholder='Cebolla'
            value={searchValue} 
            onChange={onChangeSearchValue}
            />
        </div>
        <p>{searchValue}</p>
        </Fragment>
    )
}

export { TodoSearch };