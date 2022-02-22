import React from 'react';
import './TodoList.css'

export function TodoList(props) {

  const renderFunc = props.children || props.render;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

      {(!!props.totaltodos && !props.searchedTodos.length ) && props.onEmptySearchResults(props.searchText) }

      {props.searchedTodos.map(renderFunc)}
      <ul>
        {props.children}
      </ul>
    </section>
  );
}