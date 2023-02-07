import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user.model';

const USER_API = 'http://localhost:8080/api/v1/user/';
const OPENSHIFT_USER_API = 'https://api-slymo-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/api/v1/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(OPENSHIFT_USER_API + `users`);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any>( `${OPENSHIFT_USER_API}${id}`) ;
  }

  /*create(data: any): Observable<any> {
    return this.http.post(`${USER_API}register`, data);
  }*/

  create(username: string, email: string, password: string, role: string[]): Observable<any> {
    return this.http.post(
      OPENSHIFT_USER_API + 'register',
      {
        username,
        email,
        password,
        role
      },
      httpOptions
    );
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${OPENSHIFT_USER_API}update_profile/${id}`, data);
  }

  /*update(id: number, username: string, email: string, password: string): Observable<any> {
    return this.http.put(
      `${USER_API}update_profile/${id}`,
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }*/

  delete(id: number): Observable<any> {
    return this.http.delete(`${OPENSHIFT_USER_API}delete/${id}`);
  }
}


