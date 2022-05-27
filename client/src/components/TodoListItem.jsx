import React from 'react';
import PropTypes from 'prop-types';

export default function TodoListItem({ todo, deleteTodo }) {
  return (
    <li key={todo.id} className="todo-list-item">
      <input type="checkbox" onClick={() => deleteTodo(todo.id)} />
      {todo.description}
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
