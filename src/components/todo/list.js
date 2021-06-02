import React from 'react';
import { Button, Card } from 'react-bootstrap';

function TodoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Card >
            <Card.Body onClick={() => props.handleComplete(item._id)}>
              <Card.Title>
                {item.text}
              </Card.Title>
              <Card.Subtitle>
                {'>'} {item.assignee}
              </Card.Subtitle>
              <Card.Text>
                difficulty: {item.difficulty}
              </Card.Text>
            </Card.Body>
            <Button variant="outline-dark" onClick={() => props.handleDelete(item._id)}>X</Button>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
