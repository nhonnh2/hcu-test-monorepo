import { axiosInstance } from '@hcu-test-monorepo/utils';
import {
  TaskBodyType,
  TaskDetailType,
  TaskParamsType,
} from '@task-management/models/task.model';

const taskApi = {
  getListTask: (params?: TaskParamsType) =>
    axiosInstance.get('/tasks', { params }),
  addTask: (task: TaskBodyType) => axiosInstance.post('/tasks', task),
  deleteTask: (id: string) => axiosInstance.delete(`/tasks/${id}`),
  updateTask: (task: TaskDetailType) =>
    axiosInstance.put(`/tasks/${task.id}`, task),
};

export default taskApi;
