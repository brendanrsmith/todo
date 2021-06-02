import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function TodoForm(props) {

  const [item, setItem] = useState({});

  const _handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };

  return (
    <>
      <Form onSubmit={_handleSubmit}>
      <h3>Add Item</h3>
        <Form.Group>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={_handleInputChange}
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
        </Form.Group>
        <br/>
        <Button variant="outline-dark" type="submit">Add Item</Button>
      </Form>
    </>
  );
}


export default TodoForm;
