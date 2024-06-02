import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NgIf } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // For NO Standalone Components
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgIf, SharedModule, TasksModule], // For Standalone Components
})
export class AppModule {}
