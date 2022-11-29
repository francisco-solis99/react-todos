import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Checkmark from './Checkmark';
import PropTypes from 'prop-types';
import '../css/todo.css';


import { MdDelete } from 'react-icons/md';

function Todo({ todo }) {
  const { done, text, id, visible } = todo;
  const { deleteTodo, changeDoneTodo } = useContext(TodosContext);

  const handlerDeleteTodo = () => deleteTodo(id);

  return (
    <li className={`list-item  ${done ? 'done' : ''} ${!visible ? 'no-visible' : ''}`}>
      <span>{text}</span>
      <Checkmark done={done} id={id} onClickCheckmark={changeDoneTodo} />
      <button className="Todo__button delete" onClick={handlerDeleteTodo}>
        <MdDelete />
      </button>
    </li>
  )
};


Todo.propTypes = {
  todo: PropTypes.object,
}

export default Todo;
