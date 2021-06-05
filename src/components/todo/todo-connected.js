import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import useAjax from '../hooks/ajax-hook';
import ListSettings from './settings';
import useTodoApi from '../hooks/todo-api-hook.js';


import './todo.scss';

const ToDo = () => {

  // const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; // class API
  // const todoAPI = 'https://brsmith-api-server.herokuapp.com/todos'; // BRS API

  const [isLoading, list, getTodoItems, addItem, deleteItem, toggleComplete] = useTodoApi();
  useEffect(getTodoItems, []);
  
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
          <TodoForm handleSubmit={addItem} />
        </div>
        <div>
          <TodoList
            list={list}
            handleDelete={deleteItem}
            handleComplete={toggleComplete}
          // handleUpdate={_updateItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
