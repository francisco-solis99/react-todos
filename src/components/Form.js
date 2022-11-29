import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import '../css/form.css';


const initState = '';

function Form() {
  const [value, setValue] = useState(initState);

  const { createTodo } = useContext(TodosContext);

  const handlerClickSubmit = (e) => {
    e.preventDefault();
    if (value !== initState) {
      createTodo({ text: value, done: false });
      setValue(initState);
    }
  }


  return (
    <form className='Form' onSubmit={(e) => handlerClickSubmit(e)} >
      <input type='text'
        className='Form__input'
        placeholder='Agrega una tarea'
        value={value}
        onChange={e => {
          setValue(e.currentTarget.value);
        }}
      />
      <button className='Form__button' type='submit'>Send</button>
    </form>
  )
};

export default Form;
