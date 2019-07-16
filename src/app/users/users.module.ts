import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetaisComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UserListComponent, UserDetaisComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
