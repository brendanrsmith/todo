import React, { useContext } from 'react';
import { Badge, Button, Toast } from 'react-bootstrap';
import { SettingsContext } from '../../context/site';

function TodoList(props) {
  const context = useContext(SettingsContext);
  let list = props.list;


  if (context.sortField === 'name') {
    list.sort((a, b) => {
      if (a.assignee.toUpperCase() > b.assignee.toUpperCase()) return 1;
      if (a.assignee.toUpperCase() < b.assignee.toUpperCase()) return -1;
      return 0;
    });
  }
  else if (context.sortField === 'difficulty') {
    list.sort((a, b) => {
      return a.difficulty - b.difficulty;
    });
  }
  else if (context.sortField === 'task') {
    list.sort((a, b) => {
      if (a.text.toUpperCase() > b.text.toUpperCase()) return 1;
      if (a.text.toUpperCase() < b.text.toUpperCase()) return -1;
      return 0;
    });
  }

  if (context.completed) {
    list = list.filter(item => !item.complete);
  }

  return (
    <ul>
      {list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <Badge className={item.complete ? "completeBadge" : "pendingBadge"}>
                {item.complete ? 'Complete' : 'Pending'}
              </Badge>
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
