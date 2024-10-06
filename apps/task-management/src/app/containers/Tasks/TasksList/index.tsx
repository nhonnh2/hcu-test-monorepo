import AddTask from './AddTask';
import TaskItem from './TaskItem';

import useTasksServices from '../hooks/useTasksServices';

import { TaskDetailType } from '@task-management/models/task.model';
// const tasks: TaskDetailType[] = [
//   {
//     id: '1',
//     name: 'Task 1',
//     status: 'todo',
//   },
//   {
//     id: '2',
//     name: 'Task 3',
//     status: 'todo',
//   },
// ];
const TasksList = () => {
  const { tasks, addTask, updateTask } = useTasksServices();

  return (
    <>
      <AddTask addTask={addTask} />
      <div className="my_tasks_todo">
        <ul className="my_tasks_todo_list">
          {tasks.map((task) => (
            <TaskItem key={task.id} data={task} updateTask={updateTask} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TasksList;
