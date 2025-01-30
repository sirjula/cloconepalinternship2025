import { useState } from "react";
import { Task } from "../interfaces/types";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = (title: string) => {
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title, completed: false }]);
      setTaskTitle("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, title: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={() => addTask(taskTitle)}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
