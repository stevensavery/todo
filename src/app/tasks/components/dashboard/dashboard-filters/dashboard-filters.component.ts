import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'stevensavery-todo-dashboard-filters',
  templateUrl: 'dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss']
})
export class DashboardFiltersComponent {
  @Input() sortDirection: string;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();

  filterData(search: string) {
    this.search.emit(search);
  }

  sortData() {
    this.sort.emit(this.sortDirection === 'asc' ? 'desc' : 'asc');
  }

  getSortIcon() {
    return this.sortDirection === 'asc' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }
}
