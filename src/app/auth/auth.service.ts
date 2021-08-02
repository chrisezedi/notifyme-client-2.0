import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/types/user';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl:string = environment.apiUrl;
  private token:string | null = null;
  isAuthStatus:Subject<boolean> = new Subject();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    withCredentials: true
  }

  constructor(private http:HttpClient) { }
  
  checkAuth():Observable<any>{
    return this.http.get(`${this.apiUrl}/users/access_token`,this.httpOptions)
  }

  //store token
  storeToken(token:string){
    this.token = token;
    this.isAuthStatus.next(true);
    setTimeout(() => {
      this.checkAuth().subscribe((response)=>{
        if(response.success){
          this.storeToken(response.token);
        }
      })
    }, 210000);
    return true;
  }

  //get token
  getToken(){
    return this.token;
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

  //login user
  login(user:{email:string,password:string}):Observable<any>{
    return this.http.post(`${this.apiUrl}/users/login`,user,this.httpOptions);
  }

  //logout user
  logout():Observable<any>{
    return this.http.post(`${this.apiUrl}/users/logout`,null,this.httpOptions);
  }
}
