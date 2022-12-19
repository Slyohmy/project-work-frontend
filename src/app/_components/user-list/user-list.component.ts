import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/_services/user/user.service';
import { User } from 'src/app/_models/user.model';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserDetailsComponent } from '../user-details/user-details.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.users = this.userService.getAll();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
     .subscribe(
      data => {
        console.log(data);
        this.reloadData();
  },
   error => console.log(error));
  }

  userDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
}