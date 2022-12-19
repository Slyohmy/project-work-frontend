import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }

  updateUser(): void {
    this.userService.update(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new data();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void{
    this.updateUser();    
  }

  gotoList(): void {
    this.router.navigate(['users']);
  }

}
