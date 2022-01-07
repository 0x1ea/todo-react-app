import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoList} from '../TodoList'
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { useTodos } from "./useTodos"



function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue, 
    setSearchValue,
    totaltodos, 
    completedTodos,
    addTodo,
  } = useTodos();

  return(    
    <>
      <TodoHeader>
        <TodoCounter 
          totaltodos={totaltodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </>
  );
}

export default App;
