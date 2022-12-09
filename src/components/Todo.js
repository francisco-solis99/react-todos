import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import { TodosContext } from '../context/TodosContext';
// import '../css/todo.css';


function Todo({ todo }) {
  const { done, text, id, visible, details } = todo;
  const { deleteTodo, changeDoneTodo } = useContext(TodosContext);

  const handlerDeleteTodo = (e) => {
    const todoToDelete = e.currentTarget.parentElement;
    todoToDelete.classList.add('to-delete');
    setTimeout(() => {
      console.log('Delete...');
      deleteTodo(id);
    }, 0);
  };

  return (
    <ListItem className={`list-item  ${done ? 'done' : ''} ${!visible ? 'no-visible' : ''}`} secondaryAction={
      <Tooltip title="Delete">
        <IconButton edge="end" aria-label="delete" onClick={(e) => handlerDeleteTodo(e)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    } disablePadding>
      <ListItemButton onClick={() => changeDoneTodo(id, { done: !done })} >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={done}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <Tooltip title={details ? details.join(', ') : 'No details'} arrow placement="top-start">
          <ListItemText primary={text} >
            {/* <Link className="list-item__link" to={`/details/${id}`}>
            </Link> */}
          </ListItemText>
        </Tooltip>
      </ListItemButton>
    </ListItem>
  )
};


Todo.propTypes = {
  todo: PropTypes.object,
}

export default Todo;
