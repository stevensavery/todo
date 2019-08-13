import { NgModule } from '@angular/core';
import { SharedModule } from '@stevensavery/shared/shared.module';
import { DashboardComponent, DashboardFiltersComponent } from './components/dashboard';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardListComponent } from './components/dashboard/dashboard-list';
import { FilterPipe, SortPipe } from './utils';

const COMPONENTS = [
  DashboardComponent,
  DashboardFiltersComponent,
  DashboardListComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TasksModule { }
