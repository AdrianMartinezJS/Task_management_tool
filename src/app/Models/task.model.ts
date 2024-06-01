export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
  completed: boolean;
}

export interface TaskData {
  title: string;
  summary: string;
  date: string;
}
