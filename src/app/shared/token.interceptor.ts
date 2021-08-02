import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(request).pipe(tap((event:HttpEvent<any>) => {
      if (event instanceof HttpResponse){
      } 
    },(error) => {
      if (error instanceof HttpErrorResponse){
        if(error.status === 401){
          console.log("invalid token")
        }
      }
    }))
  }
}
