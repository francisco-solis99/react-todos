import React, { useState, useContext, useRef } from 'react';
import { TodosContext } from '../context/TodosContext';
// import '../css/form.css';
import ToolTip from '../components/ToolTip';


const initState = '';

function Form() {
  const valueRef = useRef();
  const [viewTooolTip, setViewToolTip] = useState(false);
  const [msg, setMsg] = useState('');
  const { createTodo } = useContext(TodosContext);

  const launchToolTip = (text) => {
    setViewToolTip(true);
    setMsg(text);
    setTimeout(() => {
      setMsg('');
      setViewToolTip(false)
    }, 3000);
  }

  const handlerClickSubmit = (e) => {
    e.preventDefault();
    if (valueRef.current.value !== initState) {
      createTodo({ text: valueRef.current.value, done: false });
      valueRef.current.value = '';
      launchToolTip('Task added');
      return;
    }
    launchToolTip('Invalid task');
  }


  return (
    <>
      <ToolTip message={msg} show={viewTooolTip} />
      <form className='Form' onSubmit={(e) => handlerClickSubmit(e)} >
        <input type='text'
          className='Form__input'
          placeholder='Add a task'
          ref={valueRef}
        />
        <button className='Form__button' type='submit'>Create</button>
      </form>
    </>

  )
};

export default Form;
