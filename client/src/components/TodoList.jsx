import React from 'react';
import tasks from '../../../database/tasks';

export default function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.description}</li>
        ))}
      </ul>
    </>
  );
}
