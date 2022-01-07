import React from 'react';
import './TodoCounter.css';


function TodoCounter({totaltodos, completedTodos}) {

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totaltodos} TODOs &#128204;</h2>
  );
}

export { TodoCounter };