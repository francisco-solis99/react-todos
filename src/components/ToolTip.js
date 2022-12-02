import React from 'react';
import { ImNotification } from 'react-icons/im';
import '../css/tooltip.css';

export default function ToolTip(props) {
  return (
    <div className={`ToolTip ${props.show ? 'is-visible' : ''}`}>
      <ImNotification className="ToolTip__icon" />
      <div className="ToolTip__info">
        <p className="ToolTip__message">{props.message}</p>
      </div>
    </div>
  )
}
