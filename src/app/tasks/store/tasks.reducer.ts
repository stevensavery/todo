import * as Actions from './tasks.actions';
import { TasksState } from './tasks.state';
import { Status } from '../models/status.enum';

export const initialState: TasksState = {
  tasks: [
    { id: 1, description: 'Laundry', status: Status.Active },
    { id: 2, description: 'Shopping', status: Status.Active },
    { id: 3, description: 'Make Task App', status: Status.Complete }
  ]
};

export function tasksReducer(state: TasksState = initialState, action: Actions.TasksActions): TasksState {
  switch (action.type) {
    case Actions.AddTask.TYPE: {
      return {
        ...state,
        tasks: [
          ...state.tasks, 
          {
            id: Math.max(...state.tasks.map(i => i.id)) + 1,
            description: action.description,
            status: Status.Active
          }
        ]
      };
    }
    case Actions.CompleteTask.TYPE: {
      const task = state.tasks.find(i => i.id === action.id);
      return { ...state, tasks: [...state.tasks.filter(i => i.id !== action.id), { ...task, status: Status.Complete }] };
    }
    case Actions.DeleteTask.TYPE: {
      return { ...state, tasks: state.tasks.filter(i => i.id !== action.id) };
    }
    default: {
      return state;
    }
  }
}
