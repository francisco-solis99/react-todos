import React from 'react';
import '../css/checkmark.css';
import PropTypes from 'prop-types';


function Checkmark(props) {

  const handlerCheckTodo = (e) => {
    props.onClickCheckmark(props.id, { done: !props.done })
  }

  return (
    <span data-testid="checkmark" className={`checkmark ${props.done ? 'dimmed' : ''}`} onClick={(e) => handlerCheckTodo(e)}>
      <div className="checkmark_stem" />
      <div className="checkmark_kick" />
    </span>
  )
};


Checkmark.propTypes = {
  done: PropTypes.bool,
  onClickCheckmark: PropTypes.func.isRequired
}

export default Checkmark
