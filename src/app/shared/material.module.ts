import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const COMPONENTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class MaterialModule { }
