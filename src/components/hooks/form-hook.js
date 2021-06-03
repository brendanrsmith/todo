import { useState } from 'react';

// must stick to "use" convention for custom hooks
const useForm = (callback) => {

  // this will collect form values
  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    e.target.reset();

    const newItem = {};
    setItem(newItem);
    callback(item);
  }

  const handleChange = (e) => {
    e.persist();
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return [
    handleChange,
    handleSubmit,
  ]
}

export default useForm;