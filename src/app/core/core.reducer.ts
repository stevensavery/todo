import { TasksState, tasksReducer } from "@stevensavery/tasks/store";

export interface AppState {
  tasks: TasksState;
}

export const rootReducer = {
  tasks: tasksReducer
};
