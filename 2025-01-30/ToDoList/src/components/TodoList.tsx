import React, { useState } from "react";
import { Todo } from "../interfaces/types";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "../styles.css";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <div className="mt-4 space-y-2">
        {todos.length > 0 ? (
          todos.map(todo => <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
