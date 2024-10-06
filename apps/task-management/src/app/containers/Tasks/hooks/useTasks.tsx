import { useEffect, useState } from 'react';

import taskApi from '@task-management/apis/taskApi';
import { TaskDetailType } from '@task-management/models/task.model';

function useTasks() {
  const [tasks, setTasks] = useState<TaskDetailType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getListTask();
  }, []);

  const getListTask = () => {
    setIsLoading(true);
    taskApi
      .getListTask()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error('getListTask__error', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTask = (newTask: TaskDetailType) => {
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (newTask: TaskDetailType) => {
    const taskIndex = tasks.findIndex((task) => task.id === newTask.id);
    const newTasks = [...tasks];
    newTasks[taskIndex] = newTask;
    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, isLoading, addTask, updateTask, deleteTask };
}

export default useTasks;
