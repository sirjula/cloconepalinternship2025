import React, { useState } from "react";
import { Todo } from "../interfaces/types";

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(todo.isEditing);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded bg-gray-100">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-1"
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 rounded">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded">
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
