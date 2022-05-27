import React from 'react';
import PropTypes from 'prop-types';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array
};

TodoList.defaultProps = {
  todos: []
};
