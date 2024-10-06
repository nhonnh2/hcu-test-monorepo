import { useState } from 'react';
import { Alert, CircularProgress, Button } from '@mui/material'; // Thêm Button từ MUI
import { GeneralTextField } from '@hcu-test-monorepo/shared-ui';
import { Add } from '@mui/icons-material'; // Thêm biểu tượng Add từ MUI

import taskApi from '@task-management/apis/taskApi';
import { TaskDetailType } from '@task-management/models/task.model';

type AddTaskProps = { addTask: (task: TaskDetailType) => void };

const AddTask = ({ addTask }: AddTaskProps) => {
  const [nameTask, setNameTask] = useState<string>('');
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAddTask = () => {
    if (nameTask.trim() === '') {
      setError('Task name is required');
      return;
    }
    setLoadingSubmit(true);
    taskApi
      .addTask({ name: nameTask, status: 'todo' })
      .then((res) => {
        addTask(res.data);
      })
      .catch((err) => {
        console.error('addTask__error', err);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
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

        <Button
          onClick={handleAddTask}
          variant="contained"
          color="primary"
          className="!w-10 !h-10 !rounded-full"
          disabled={loadingSubmit}
        >
          {loadingSubmit ? <CircularProgress size={24} /> : <Add />}
        </Button>
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
