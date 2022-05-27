import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};
