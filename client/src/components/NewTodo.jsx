import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => setNewTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo..."
        onChange={handleChange}
        value={newTodo}
      />{' '}
      <button type="submit">Submit</button>
    </form>
  );
}

NewTodo.propTypes = {
  addTodo: PropTypes.func
};

NewTodo.defaultProps = {
  addTodo: () => {}
};
