import CircularProgress from '@mui/material/CircularProgress';

import AddTask from './AddTask';
import TaskItem from './TaskItem';

import useTasks from '../hooks/useTasks';

const TasksList = () => {
  const { tasks, isLoading, addTask, updateTask, deleteTask } = useTasks();

  return (
    <>
      <AddTask addTask={addTask} />
      <div className="my_tasks_todo">
        {isLoading ? (
          <div className="flex justify-center items-center">
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
