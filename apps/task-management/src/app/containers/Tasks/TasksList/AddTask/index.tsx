import { useState } from 'react';
import { Alert } from '@mui/material';
import { GeneralTextField } from '@hcu-test-monorepo/shared-ui';

import { TaskBodyType } from '@task-management/models/task.model';

type AddTaskProps = { addTask: (task: TaskBodyType) => void };

const AddTask = ({ addTask }: AddTaskProps) => {
  const [nameTask, setNameTask] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleAddTask = () => {
    if (nameTask.trim() === '') {
      setError('Task name is required');
      return;
    }
    addTask({ name: nameTask });
  };

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
    setError('');
  };

  return (
    <>
      <div className="my_tasks_add d-flex justify-content-between gap-3">
        <GeneralTextField
          className="w-full h-11"
          placeholder="Enter a new task"
          value={nameTask}
          onChange={handleChangeTask}
        />
        <button
          onClick={handleAddTask}
          className="bg-pink-600 text-white rounded-full w-20 h-10"
        >
          Add +
        </button>
      </div>
      {error && (
        <Alert severity="error" className="mb-3">
          {error}
        </Alert>
      )}
    </>
  );
};

export default AddTask;
