import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext'


function TodoCounter(props) {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs &#128204;</h2>
  );
}

export { TodoCounter };