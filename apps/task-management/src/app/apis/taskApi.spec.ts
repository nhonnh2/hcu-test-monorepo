import taskApi from './taskApi';
import { axiosInstance } from '@hcu-test-monorepo/utils';

jest.mock('@hcu-test-monorepo/utils', () => ({
  axiosInstance: {
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
    put: jest.fn(),
  },
}));

describe('taskApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch list of tasks', async () => {
    const params = { status: 'todo' };
    const mockResponse = {
      data: [{ id: '1', name: 'Task 1', status: 'todo' }],
    };
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const response = await taskApi.getListTask(params);
    expect(axiosInstance.get).toHaveBeenCalledWith('/tasks', { params });
    expect(response).toEqual(mockResponse);
  });

  it('should add a task', async () => {
    const newTask = { name: 'New Task', status: 'todo' };
    const mockResponse = { data: { id: '1', ...newTask } };
    (axiosInstance.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const response = await taskApi.addTask(newTask);
    expect(axiosInstance.post).toHaveBeenCalledWith('/tasks', newTask);
    expect(response).toEqual(mockResponse);
  });

  it('should delete a task', async () => {
    const id = '1';
    (axiosInstance.delete as jest.Mock).mockResolvedValueOnce({});

    await taskApi.deleteTask(id);
    expect(axiosInstance.delete).toHaveBeenCalledWith(`/tasks/${id}`);
  });

  it('should update a task', async () => {
    const updatedTask = { id: '1', name: 'Updated Task', status: 'done' };
    (axiosInstance.put as jest.Mock).mockResolvedValueOnce({
      data: updatedTask,
    });

    const response = await taskApi.updateTask(updatedTask);
    expect(axiosInstance.put).toHaveBeenCalledWith(
      `/tasks/${updatedTask.id}`,
      updatedTask
    );
    expect(response.data).toEqual(updatedTask);
  });
});
