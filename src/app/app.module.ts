import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CreateUserComponent } from './_components/create-user/create-user.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { UserListComponent } from './_components/user-list/user-list.component';
import { UpdateUserComponent } from './_components/update-user/update-user.component';

@NgModule({
  declarations: [					
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }