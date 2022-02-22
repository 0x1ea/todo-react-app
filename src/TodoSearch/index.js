import React from 'react';
import './TodoSearch.css';

export function TodoSearch({setSearchValue, searchValue, loading}) {
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
      disabled={loading}
    />
  );
}
