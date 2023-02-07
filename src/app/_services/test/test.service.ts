import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/v1/test/';
const OPENSHIFT_API = 'https://api-slymo-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/api/v1/test/';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(OPENSHIFT_API + 'home', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(OPENSHIFT_API + 'user', { responseType: 'text' });
  }
}