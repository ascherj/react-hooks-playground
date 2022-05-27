import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [nextTodoId, setNextTodoId] = useState(null);

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

  // When todos changes...
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setNextTodoId(todos.length ? todos[todos.length - 1].id + 1 : 0);
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = { id: nextTodoId, description: todo };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h3>Todo List</h3>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
