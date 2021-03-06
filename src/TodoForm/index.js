import React from 'react';
import './Form.css'

export function TodoForm({addTodo, setOpenModal}) {

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new To-Do</label>

      <textarea 
        value = {newTodoValue}
        onChange={onChange}
        placeholder='Read Peter Lynch`s book'
      />

      <div className="TodoForm-buttonContainer">

        <button
          className="TodoForm-button TodoForm-button-cancel"
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>


        <button
          className="TodoForm-button TodoForm-button-add"
          type='submit'
        >
          Add
        </button>

      </div>
    </form>
  )
}

