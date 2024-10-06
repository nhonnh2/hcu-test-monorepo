import { GeneralTextField } from '@hcu-test-monorepo/shared-ui';

import TasksList from './TasksList';
import TaskBanner from '@task-management/assets/images/task_banner.png';

import { TaskDetailType } from '@task-management/models/task.model';
import './style.scss';

type Props = {};

// can you mock data task
const tasks: TaskDetailType[] = [
  {
    id: '1',
    name: 'Task 1',
    status: 'todo',
  },
  {
    id: '2',
    name: 'Task 3',
    status: 'todo',
  },
];

const Tasks = (props: Props) => {
  const addTask = () => {
    // Logic để thêm task
  };

  return (
    <div className="my_tasks_container">
      <div className="my_tasks_header">
        <img src={TaskBanner} alt="Header" />
      </div>
      <div className="my_tasks_body">
        <div className="my_tasks_content">
          <div className="my_tasks_title">
            <h2>My Tasks</h2>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
          <TasksList />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
