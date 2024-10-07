import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './index';
import taskApi from '@task-management/apis/taskApi';

jest.mock('@task-management/apis/taskApi');

describe('useTasks', () => {
  const mockTasks = [
    { id: '1', name: 'Task 1', status: 'todo' },
    { id: '2', name: 'Task 2', status: 'done' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch tasks on mount', async () => {
    (taskApi.getListTask as jest.Mock).mockResolvedValueOnce({
      data: mockTasks,
    });

    const { result, waitForNextUpdate } = renderHook(() => useTasks({}));

    await waitForNextUpdate();

    expect(result.current.tasks).toEqual(mockTasks);
    expect(result.current.isLoading).toBe(false);
  });

  it('should add a new task', async () => {
    (taskApi.getListTask as jest.Mock).mockResolvedValueOnce({
      data: [],
    });

    const { result, waitForNextUpdate } = renderHook(() => useTasks({}));

    await waitForNextUpdate();

    act(() => {
      result.current.addTask({ id: '3', name: 'Task 3', status: 'todo' });
    });

    expect(result.current.tasks).toEqual([
      { id: '3', name: 'Task 3', status: 'todo' },
    ]);
  });

  it('should update an existing task', async () => {
    (taskApi.getListTask as jest.Mock).mockResolvedValueOnce({
      data: [],
    });

    const { result, waitForNextUpdate } = renderHook(() => useTasks({}));

    await waitForNextUpdate();

    act(() => {
      result.current.addTask({ id: '1', name: 'Task 1', status: 'todo' });
    });

    expect(result.current.tasks).toEqual([
      { id: '1', name: 'Task 1', status: 'todo' },
    ]);

    act(() => {
      result.current.updateTask({
        id: '1',
        name: 'Updated Task 1',
        status: 'done',
      });
    });

    expect(result.current.tasks).toEqual([
      { id: '1', name: 'Updated Task 1', status: 'done' },
    ]);
  });

  it('should delete a task', async () => {
    (taskApi.getListTask as jest.Mock).mockResolvedValueOnce({
      data: [],
    });

    const { result, waitForNextUpdate } = renderHook(() => useTasks({}));

    await waitForNextUpdate();

    act(() => {
      result.current.addTask({ id: '1', name: 'Task 1', status: 'todo' });
      result.current.deleteTask('1');
    });

    expect(result.current.tasks).toEqual([]);
  });
});
