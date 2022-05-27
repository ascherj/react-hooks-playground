import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: todos.length, description: todo };
    setTodos([...todos, newTodo]);
  };

  // cDM
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    const hasItemsInLocalStorage = localTodos && localTodos.length;

    if (!hasItemsInLocalStorage) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  // Update local storage whenever todos changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h3>Todo List</h3>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
