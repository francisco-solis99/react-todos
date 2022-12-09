import React, { useContext } from 'react';
// import '../css/header.css'
import { TodosContext } from '../context/TodosContext';
import Typography from '@mui/material/Typography';

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
      <Typography variant="h5" component="h1">
        There are {todos.length ?? 0} tasks
      </Typography>
    </div>
  )
};

export default Header;
