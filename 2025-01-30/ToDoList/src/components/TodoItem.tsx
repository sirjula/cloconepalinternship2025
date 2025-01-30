import { Task } from "../interfaces/types";
import { useState } from "react";

interface TodoItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => { updateTask(task.id, newTitle); setIsEditing(false); }}>Save</button>
          <button onClick={() => setIsEditing(false)}>Delete</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
      </>
      )}
    </li>
  );
};

export default TodoItem;
