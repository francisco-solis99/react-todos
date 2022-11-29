import React, { useContext } from 'react';
import '../css/header.css'
import { TodosContext } from '../context/TodosContext';

function Header() {

  // DidMount and DidUnmount
  // React.useEffect(() => {
  //   console.log('DidMount');

  //   return () => {
  //     console.log('Functional component Unmount')
  //   };
  // }, []);

  const { todos } = useContext(TodosContext);

  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        There are {todos.length ?? 0} tasks
      </h1>
    </div>
  )
};

export default Header;
