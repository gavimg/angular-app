import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUsers: User[];
  cols: any[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.fetchUsers();
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'login', header: 'login' },
      { field: 'type', header: 'type' },
      { field: 'node_id', header: 'node_id' },
      { field: 'site_admin', header: 'site_admin' }
  ];
  }

  fetchUsers() {
    this.userService.fetchAllGithubUsers().subscribe( response => {
      console.log(response);
      this.users = response;
    })
  }

  onRowSelect(event) {
    console.log(event);
  }

  onRowUnselect(event) {
    console.log(event);
  }

}
