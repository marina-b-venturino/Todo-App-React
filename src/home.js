import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoBanner } from './Components/TodoBanner/TodoBanner';
import { TodosLoading } from './Components/TodosLoading/TodosLoading';
import { TodosError } from './Components/TodosError/TodosError';
import { EmptyTodos } from './Components/EmptyTodos/EmptyTodos';
import { Modal } from './Components/Modal/Modal';
import { TodoForm } from './Components/TodoForm/TodoForm';
import { TodoContext } from './TodoContext';

function Home() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
          <TodoBanner />
          <TodoCounter  />
          <TodoSearch  />
    
            <TodoList>
            {loading && (
            <> 
            <TodosLoading/>  
            </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)} />
          ))}
          </TodoList>
          
          <CreateTodoButton setOpenModal={setOpenModal} />

          {openModal && (
            <Modal>
            <TodoForm/>
            </Modal>
          )}
        </>
      );
}

export {Home};