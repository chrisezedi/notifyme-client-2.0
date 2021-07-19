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
  private token:string | null = null;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    withCredentials: true
  }

  constructor(private http:HttpClient) { }
  //check if user is logged in
  isAuth():boolean{
    return this.token ? true : false;
  }
  
  checkAuth():Observable<any>{
    return this.http.get(`${this.apiUrl}/users/access_token`,this.httpOptions);
  }

  //log in user
  storeToken(token:string){
    this.token = token;
    return true;
  }

  //register new user
  signup(user:User):Observable<any>{
    return this.http.post(`${this.apiUrl}/users`,user,this.httpOptions);
  }

  //verify user
  verify(token:string):Observable<any>{
    return this.http.put(`${this.apiUrl}/users/verify`,{token},this.httpOptions);
  }

  //resend verification link
  resendVerificationLink(email:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/users/resend_verification_link`,{email},this.httpOptions);
  }
}
