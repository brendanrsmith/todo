import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ToDo from './components/todo/todo.js';


function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">Home</Navbar.Brand>
      </Navbar>
      <br />
      <ToDo />
    </>
  );
}
export default App;