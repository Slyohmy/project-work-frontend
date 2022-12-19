import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './_services/storage/storage.service';
import { AuthService } from './_services/auth/auth.service';
import { EventBusService } from './_shared/event-bus.service';
import { UserService } from './_services/test/test.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showUserList = false;
  showAddUser = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showUserList = this.roles.includes('ROLE_ADMIN');
      this.showAddUser = this.roles.includes('ROLE_ADMIN');
      this.showAddUser = this.roles.includes('ROLE_ADMIN');


      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}