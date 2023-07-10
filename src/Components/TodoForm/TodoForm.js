import React from "react";
import './TodoForm.css'
import { TodoContext } from '../../TodoContext';

function TodoForm() {
    const {
      setOpenModal,
      addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
       <form onSubmit={onSubmit}>
        <label>Ingresa tu tarea</label>
        <textarea placeholder="Escribe aquí.." value={newTodoValue}
        onChange={onChange}></textarea>
        <div className="buttonContainer">
        <button type="submit" className="form-button form-button--agregar">Agregar</button>
        <button className="form-button form-button--cancelar" onClick={onCancel}>Cancelar</button>
        </div>
       </form>
    );
}

export {TodoForm};