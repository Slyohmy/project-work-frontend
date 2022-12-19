import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    roles: ['']
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router) {
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, roles} = this.form;
    
    this.userService.create(username, email, password, roles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        
      }
    });
  }
}



  /*user: User = new User();
  submitted = false;

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  createUser(): void {
    this.submitted = false;
    this.user = new User;  
  }  

  save() {
    this.userService.create(this.user).subscribe(data => {
      console.log(data);
      this.user = new User();
      this.list();
    }, err => 
      console.log(err));
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  list(){
    this.router.navigate(['users']);
  }

}*/

