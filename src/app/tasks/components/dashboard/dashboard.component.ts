import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getTaskList, TasksState } from '@stevensavery/tasks/store';
import { Task } from '@stevensavery/tasks/models';

@Component({
  selector: 'stevensavery-todo-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  search: string;
  sort: string;
  tasks: Task[];

  constructor(private store: Store<TasksState>) {
    this.sort = 'asc';
  }

  ngOnInit() {
    this.store.pipe(select(getTaskList)).subscribe((i: Task[]) => this.tasks = i);
  }

  searchTasks(search: string) {
    this.search = search;
  }

  sortTasks(direction: string) {
    this.sort = direction;
  }
}
