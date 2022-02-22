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
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';



export function App() {

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
      <TodoHeader loading={loading}>
        <TodoCounter 
          totaltodos={totaltodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totaltodos={totaltodos}
        searchText={searchValue}

        onError={() => <TodosError/>}

        onLoading={() => <TodosLoading/>}

        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={(searchText) => (<p>No hay resultados para "{searchText}"</p>)}

        // render={todo => (
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text} 
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      
      >
        { todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
        )}

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

