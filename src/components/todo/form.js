import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useForm from '../hooks/form-hook';


const TodoForm = (props) => {

  const [handleChange, handleSubmit] = useForm(submittor);

  function submittor(item) {
    props.handleSubmit(item);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <Form.Group>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
        </Form.Group>
        <Button variant="outline-dark" type="submit">Add Item</Button>
      </Form>
    </>
  );
}


export default TodoForm;
