export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodoProps {
    tasks: Task[];
    addTask: (title: string) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, title: string) => void;
  }
  