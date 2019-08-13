import { Action } from '@ngrx/store';
import { Task } from '../models';

export class AddTask implements Action {
  public static readonly TYPE = '[Tasks] Add Task';
  readonly type = AddTask.TYPE;
  constructor(public description: string) { }
}

export class DeleteTask implements Action {
  public static readonly TYPE = '[Task] Delete Task';
  readonly type = DeleteTask.TYPE;
  constructor(public id: number) { }
}

export class CompleteTask implements Action {
  public static readonly TYPE = '[Task] Complete Task';
  readonly type = CompleteTask.TYPE;
  constructor(public id: number) { }
}

export type TasksActions =
  AddTask |
  CompleteTask |
  DeleteTask;