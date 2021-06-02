import React from 'react';
import { Button } from 'react-bootstrap';
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
              {item.text} ({item.difficulty}) > {item.assignee}
          </Alert>
          <Button variant="outline-dark" onClick={() => props.handleDelete(item._id)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
