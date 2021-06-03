import React from 'react';
import { Badge, Button, Toast } from 'react-bootstrap';

function TodoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <Badge className="completeBadge">Complete</Badge>
              <Badge className="pendingBadge">Pending</Badge>
              <strong>{item.assignee}</strong>
              <Button className="btn-close" onClick={() => props.handleDelete(item._id)}>X</Button>
            </Toast.Header>
            <Toast.Body onClick={() => props.handleComplete(item._id)}>
              <p>{item.text}</p>
              <small>
                difficulty: {item.difficulty}
              </small>
            </Toast.Body>
          </Toast>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
