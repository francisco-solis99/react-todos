import React, { useState, useEffect, createContext } from 'react';

const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

export const TodosContext = createContext();

export function TodosContextProvider(props) {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const changeDoneTodo = (todoId) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo => todo.id === todoId);
    newTodos[indexTodo].done = !newTodos[indexTodo].done;
    setTodos(newTodos);
  }

  const createTodo = ({ text, done }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done,
      visible: true
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (idTodo) => {
    setTodos(todos.filter(todo => todo.id !== idTodo));
  }

  const filterTodos = (filterName) => {
    const filters = {
      'all': () => todos.map(todo => {
        todo.visible = true;
        return todo;
      }),
      'done': () => todos.map(todo => {
        !todo.done ? todo.visible = false : todo.visible = true;
        return todo;
      }),
      'undone': () => todos.map(todo => {
        todo.done ? todo.visible = false : todo.visible = true;
        return todo;
      })
    }

    const filter = filters[filterName.toLowerCase()];
    if (!filter) return null;
    const filteredTodos = filter();
    setTodos(filteredTodos);
  }


  return (
    <TodosContext.Provider value={{
      todos,
      filterTodos,
      deleteTodo,
      createTodo,
      changeDoneTodo
    }}>
      {props.children}
    </TodosContext.Provider>
  )
}
