import { GeneralTextField } from '@hcu-test-monorepo/shared-ui';

import TaskItem from './TaskItem';
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
          <div className="my_tasks_add d-flex justify-content-between gap-3">
            <GeneralTextField
              className="w-full h-11"
              placeholder="Enter a new task"
            />
            <button
              onClick={addTask}
              className="bg-pink-600 text-white rounded-full w-20 h-10"
            >
              Add +
            </button>
          </div>
          <div className="my_tasks_todo">
            <ul className="my_tasks_todo_list">
              {tasks.map((task) => (
                <TaskItem key={task.id} data={task} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
