import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import taskApi from '@task-management/apis/taskApi';
import { TaskDetailType } from '@task-management/models/task.model';

interface TaskItemProps {
  data: TaskDetailType;
  updateTask: (task: TaskDetailType) => void;
  deleteTask: (id: string) => void;
}

const TaskItem = ({ data, updateTask, deleteTask }: TaskItemProps) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleUpdateTask = () => {
    setIsProcessing(true);
    taskApi
      .updateTask({
        id: data.id,
        name: data.name,
        status: data.status === 'todo' ? 'completed' : 'todo',
      })
      .then((res) => {
        updateTask(res.data);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const handleDeleteTask = () => {
    setIsProcessing(true);
    taskApi
      .deleteTask(data.id)
      .then(() => {
        deleteTask(data.id);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <li className="flex justify-between items-center bg-white rounded shadow mb-2 p-2">
      <span>{data.name}</span>
      <div className="buttons">
        <button
          className="text-gray-400 mr-1"
          onClick={handleDeleteTask}
          disabled={isProcessing}
        >
          <DeleteIcon fontSize="small" />
        </button>
        <button onClick={handleUpdateTask} disabled={isProcessing}>
          {data.status !== 'completed' ? (
            <CheckCircleOutlineIcon
              fontSize="small"
              className="text-gray-400"
            />
          ) : (
            <CheckCircleIcon fontSize="small" className="text-green-500" />
          )}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
