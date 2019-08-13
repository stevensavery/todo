import { TasksState } from './tasks.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '@stevensavery/core/core.reducer';

export const tasksFeature = 'tasks';

export const getTasksState = (state: AppState) => state.tasks;

export const getTaskList = createSelector(
  getTasksState,
  (state: TasksState) => state.tasks
);
