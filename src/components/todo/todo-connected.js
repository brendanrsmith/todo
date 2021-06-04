import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/ajax-hook';
import ListSettings from './settings';

import './todo.scss';

const ToDo = () => {

  // const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; // class API
  const todoAPI = 'https://brsmith-api-server.herokuapp.com/todos'; // BRS API

  const [_addItem, _toggleComplete, _deleteItem, list] = useAjax(todoAPI);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <div>
        <ListSettings />
      </div>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        <div>
          <TodoList
            list={list}
            handleDelete={_deleteItem}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
