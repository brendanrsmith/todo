// Logic from https://www.youtube.com/watch?v=IYCa1F-OWmk

import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Button onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Pagination;