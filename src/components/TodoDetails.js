import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { TodosContext } from '../context/TodosContext';


function TodoDetails() {
  const { id } = useParams();
  const { todos } = useContext(TodosContext);

  const indexTodo = todos.findIndex(todo => todo.id.toString() === id);
  const todo = todos[indexTodo];

  return (
    <>
      <div className="card-header">
        <h1 className="card-header-title header">
          {todo && todo.text}
        </h1 >
      </div>
      <div className="list-wrapper">
        {
          todo && todo.details && todo.details.map((detail, i) =>
            <div key={i} className="list-item">
              {detail}
            </div>
          )
        }
      </div>
    </>
  )
}


export default TodoDetails;
