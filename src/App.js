import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import {TodoList} from './TodoList'
// import logo from './logo.svg';
// import './App.css';

const todos = [
  {text: 'Cortar la manzana', completed: true},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Leer la documentacion de chainlink', completed: false},
];

// Element: div, header, a, etc
// Atribute: className, href, alt, etc
function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export default App;
