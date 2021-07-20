import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl:string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    withCredentials: true
  }
  constructor(private http:HttpClient) { }

  //get channel categories
  getCategories():Observable<any>{
    return this.http.get(`${this.apiUrl}/channels/categories`,this.httpOptions);
  }
}
