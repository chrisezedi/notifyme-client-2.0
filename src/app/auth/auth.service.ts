import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/types/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl:string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http:HttpClient) { }

  //register new user
  signup(user:User):Observable<any>{
    return this.http.post(`${this.apiUrl}/users`,user,this.httpOptions)
  }
}
