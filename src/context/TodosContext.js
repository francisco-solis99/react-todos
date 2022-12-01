import React, { useState, useEffect, createContext } from 'react';
import { getTodosRequest, createTodoRequest, updateTodoRequest, deleteTodoRequest } from '../services/todos/todos';



// const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
export const TodosContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // setTodos(initialTodos);
    getTodosRequest().then(dataTodos => {
      setTodos(dataTodos);
    });
  }, [])

  // useEffect(() => {
  //   // localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])


  const changeDoneTodo = (todoId, body) => {
    updateTodoRequest(todoId, body)
      .then(todoUpdated => {
        const newTodos = [...todos];
        const indexTodo = newTodos.findIndex(todo => todo.id === todoUpdated.id);
        newTodos[indexTodo].done = !newTodos[indexTodo].done;
        setTodos(newTodos);
      })
      .catch(e => console.log('Error', e));
  }

  const createTodo = ({ text, done }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done,
      visible: true
    }
    createTodoRequest(newTodo).then(newTodo => {
      setTodos([...todos, newTodo]);
    });
  }

  const deleteTodo = (idTodo) => {
    deleteTodoRequest(idTodo)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== idTodo));
      })
      .catch(e => console.log('Error'));
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
