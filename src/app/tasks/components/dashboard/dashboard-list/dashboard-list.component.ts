import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Task } from '@stevensavery/tasks/models';
import { Status } from '@stevensavery/tasks/models/status.enum';
import { Store } from '@ngrx/store';
import { TasksState, AddTask, DeleteTask, CompleteTask } from '@stevensavery/tasks/store';

@Component({
  selector: 'stevensavery-todo-dashboard-list',
  templateUrl: 'dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  @Input() search: string;
  @Input() sort: string;
  @Input() tasks: Task[];

  @ViewChild('input') input: ElementRef;

  Status = Status;

  constructor(private store: Store<TasksState>) { }

  addTask(description: string) {
    this.store.dispatch(new AddTask(description));
    this.input.nativeElement.value = '';
  }

  completeTask(id: number) {
    this.store.dispatch(new CompleteTask(id));
  }

  deleteTask(id: number) {
    this.store.dispatch(new DeleteTask(id));
  }

  getIcon(status: Status): string {
    return status === Status.Complete ? 'done' : 'list';
  }
}
