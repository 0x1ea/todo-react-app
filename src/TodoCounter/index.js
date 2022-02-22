import React from 'react';
import './TodoCounter.css';


export function TodoCounter({totaltodos, completedTodos, loading}) {

  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totaltodos} TODOs &#128204;</h2>
  );
}

