import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { TasksModule } from './tasks';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { rootReducer } from './core/core.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    TasksModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
