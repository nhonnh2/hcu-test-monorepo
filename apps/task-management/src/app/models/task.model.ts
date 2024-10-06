export type TaskDetailType = {
  id: string;
  name: string;
  status?: string;
};

export type TaskBodyType = Omit<TaskDetailType, 'id'>;
