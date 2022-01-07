import React from 'react';
import './TodoSearch.css';

function TodoSearch({setSearchValue, searchValue}) {
  // Cuando se llama la funcion setState se vuelve a cargar el componente

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Studying React" 
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };