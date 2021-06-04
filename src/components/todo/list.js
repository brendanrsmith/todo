import React, { useContext, useState } from 'react';
import { Badge, Button, Toast } from 'react-bootstrap';
import { SettingsContext } from '../../context/site';
import Pagination from './pagination';

function TodoList(props) {
  const context = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  let list = props.list;


  // Sort params logic
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

  // Filter completed tasks
  if (context.completed) {
    list = list.filter(item => !item.complete);
  }

  // Get current posts (code from https://www.youtube.com/watch?v=IYCa1F-OWmk )
  const indexOfLastTask = currentPage * context.displayCount;
  const indexOfFirstTask = indexOfLastTask - context.displayCount;
  const currentposts = list.slice(indexOfFirstTask, indexOfLastTask);
  context.setTotalTasks(list.length);

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section>
      <ul>
        {currentposts.map(item => (
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
      <div>
        <Pagination
          tasksPerPage={context.displayCount}
          totalTasks={context.totalTasks}
          paginate={paginate} />
      </div>
    </section>
  );
}

export default TodoList;
