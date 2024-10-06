import { useEffect, useState } from 'react';

import taskApi from '@task-management/apis/taskApi';
import {
  TaskBodyType,
  TaskDetailType,
} from '@task-management/models/task.model';

function useTasksServices() {
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

  const addTask = (task: TaskBodyType) => {
    taskApi
      .addTask(task)
      .then((res) => {
        setTasks([res.data, ...tasks]);
      })
      .catch((err) => {
        console.error('addTask__error', err);
      });
  };

  const updateTask = (task: TaskDetailType) => {
    taskApi
      .updateTask(task)
      .then((res) => {
        const taskIndex = tasks.findIndex((task) => task.id === res.data.id);
        const newTasks = [...tasks];
        newTasks[taskIndex] = res.data;
        setTasks(newTasks);
      })
      .catch((err) => {
        console.error('updateTask__error', err);
      });
  };

  const deleteTask = (id: string) => {
    taskApi
      .deleteTask(id)
      .then((res) => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => {
        console.error('deleteTask__error', err);
      });
  };

  return { tasks, isLoading, addTask, updateTask, deleteTask };
}

export default useTasksServices;
