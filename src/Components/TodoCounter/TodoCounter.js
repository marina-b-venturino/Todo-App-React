import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter({total, completed}) {
 const {
  completedTodos,
  totalTodos,
 } = React.useContext(TodoContext);

    return (
      <h2 className='counter-title'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas de la lista
      </h2>
    );
}

export {TodoCounter};