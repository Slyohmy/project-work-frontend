import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_URL + `user/users`);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any>( `${environment.API_URL}user/${id}`) ;
  }

  /*create(data: any): Observable<any> {
    return this.http.post(`${USER_API}register`, data);
  }*/

  create(username: string, email: string, password: string, role: string[]): Observable<any> {
    return this.http.post(
      environment.API_URL + 'user/register',
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
    return this.http.put(`${environment.API_URL}user/update_profile/${id}`, data);
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
    return this.http.delete(`${environment.API_URL}user/delete/${id}`);
  }
}


