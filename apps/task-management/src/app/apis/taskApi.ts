import { axiosInstance } from '@hcu-test-monorepo/utils';
import { TaskBodyType } from '@task-management/models/task.model';

const taskApi = {
  getListTask: () => axiosInstance.get('/tasks'),
  addTask: (task: TaskBodyType) => axiosInstance.post('/tasks', task),
  deleteTask: (id: string) => axiosInstance.delete(`/tasks/${id}`),
  updateTask: (task: TaskDetailType) =>
    axiosInstance.put(`/tasks/${task.id}`, task),
};

export default taskApi;
