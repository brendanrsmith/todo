import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo() {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list2);
    }

  };

  const _deleteItem = id => {
    let list2 = list.filter(i => i._id !== id);
    setList(list2);
  }

  // Seed To Do items to list upon page load
  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  }, [])

  // Update title of browser with complete / incomplete count
  useEffect(() => {
    let todoCount = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${todoCount}`;
  })

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;
