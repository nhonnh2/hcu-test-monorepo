import { useState } from 'react';
import {
  Select,
  MenuItem,
  CircularProgress,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

import AddTask from './AddTask';
import TaskItem from './TaskItem';

import useTasks from '../hooks/useTasks';
import { TaskParamsType } from '@task-management/models/task.model';

const TasksList = () => {
  const [params, setParams] = useState<TaskParamsType>();

  const { tasks, isLoading, addTask, updateTask, deleteTask } = useTasks({
    params,
  });

  const handleChangeStatus = (event: SelectChangeEvent) => {
    switch (event.target.value) {
      case 'all':
        setParams(undefined);
        break;
      case 'completed':
        setParams({ status: 'completed' });
        break;
      case 'incomplete':
        setParams({ status: 'todo' });
        break;
    }
  };

  return (
    <>
      <AddTask addTask={addTask} />
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="task-status-select-label">Filter Tasks</InputLabel>
        <Select
          labelId="task-status-select-label"
          value={params?.status || 'all'}
          onChange={handleChangeStatus}
          label="Filter Tasks"
          fullWidth
          className="!h-8 !rounded-md"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
      <div className="my_tasks_todo mt-4">
        {isLoading ? (
          <div
            className="flex justify-center items-center"
            style={{ height: '100px' }}
          >
            <CircularProgress />
          </div>
        ) : (
          <ul className="my_tasks_todo_list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                data={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TasksList;
