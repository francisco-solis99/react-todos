import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from './Todo';
import '../css/todo-list.css';



function TodoList() {

  const { todos } = useContext(TodosContext);

  if (!todos.length) return <p className="message__default">No tasks yet, add one 😀</p>
  if (todos.every(todo => !todo.visible)) return <p className="message__default"> No tasks in that state</p>

  return (
    <ul className="list-wrapper">
      {
        todos.map(todo =>
          <Todo
            todo={todo}
            key={todo.id}
          />)
      }
    </ul>
  )
};

export default TodoList;
