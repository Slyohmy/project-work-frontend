import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Observable<User[]>;
  id: number;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = this.userService.getUserById(this.id)
  }




  /*id: number;
  user: User;
  roles: string[] = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error))
    }*/

  list(){
    this.router.navigate(['users']);
  }
}