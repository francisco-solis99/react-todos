import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import '../css/toggle-todos.css';

function ToggleTodos({ filterBy }) {

  const { filterTodos } = useContext(TodosContext);

  const handlerToggleTodos = () => filterTodos(filterBy);

  const radioName = `radio-${filterBy}`;

  return (
    <label htmlFor={radioName} className='ToggleTodos__label'>
      <span>{filterBy}</span>
      <input type="radio" defaultChecked={filterBy.toLowerCase() === 'all'} id={radioName} name="filter-todo" onClick={handlerToggleTodos}></input>
    </label>
  );
}

export default ToggleTodos;
