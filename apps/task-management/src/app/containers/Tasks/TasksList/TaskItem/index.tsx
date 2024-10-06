import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TaskDetailType } from '@task-management/models/task.model';

interface TaskItemProps {
  data: TaskDetailType;
  updateTask: (task: TaskDetailType) => void;
}

const TaskItem = ({ data, updateTask }: TaskItemProps) => {
  const handleUpdateTask = () => {
    updateTask({
      ...data,
      status: data.status === 'todo' ? 'completed' : 'todo',
    });
  };

  return (
    <li className="flex justify-between items-center bg-white rounded shadow mb-2 p-2">
      <span>{data.name}</span>
      <div className="buttons">
        <button className="text-gray-400 mr-1">
          <DeleteIcon fontSize="small" />
        </button>
        <button onClick={handleUpdateTask}>
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
