import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TaskDetailType } from '../../../models/task.model';

interface TaskItemProps {
  data: TaskDetailType;
}

const TaskItem = ({ data }: TaskItemProps) => {
  return (
    <li className="flex justify-between items-center bg-white rounded shadow mb-2 p-2">
      <span>{data.name}</span>
      <div className="buttons">
        <button className="text-gray-400 mr-1">
          <DeleteIcon fontSize="small" />
        </button>
        <button className="text-green-500">
          {data.status === 'todo' ? (
            <CheckCircleOutlineIcon fontSize="small" />
          ) : (
            <CheckCircleIcon fontSize="small" />
          )}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
