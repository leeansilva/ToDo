import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {
  const onClickButton = (msg) =>{
    alert(msg)
  } 
    return(
      <div className="buttonContainer">
          <button 
          className="CreateTodoButton"
          onClick={()=>{onClickButton("Click")}}
          >
            +
          </button>
      </div>
    )
}

export { CreateTodoButton };
