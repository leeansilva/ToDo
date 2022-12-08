import React from "react";
import { todoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(todoContext);
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nuestro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your first Task!</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Buy eggs."
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };