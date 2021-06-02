import React from 'react';
import { Alert } from 'react-bootstrap';

function TodoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Alert onClick={() => props.handleComplete(item._id)}>
              {item.text}
          </Alert>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
