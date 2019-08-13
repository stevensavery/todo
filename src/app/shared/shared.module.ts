import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

const Modules = [
  MaterialModule
];

@NgModule({
  imports: Modules,
  exports: Modules
})
export class SharedModule { }