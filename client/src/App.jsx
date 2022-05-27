import React, { useState } from 'react';
import './App.css';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: todos.length, description: todo };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h3>Todo List</h3>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
