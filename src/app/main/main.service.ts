import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'
import { ChannelCategory } from '../shared/types/channel_cat';
import { Channel } from '../shared/types/channel';

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
  renderer:Renderer2;
  isSmallScreen = new BehaviorSubject(false);

  constructor(private http:HttpClient, private rendererFactory:RendererFactory2,private observer:BreakpointObserver) { 
    this.renderer = this.rendererFactory.createRenderer(null,null);

    this.observer.observe(['(min-width:768px)']).subscribe((screen)=>{
      screen.matches ? this.isSmallScreen.next(false) : this.isSmallScreen.next(true);
    })
   }
  //initialize theme mode
  initTheme():void{
   // theme mode
   let theme = localStorage.getItem('theme-mode');
    if(!theme){
      localStorage.setItem('theme-mode','light-mode');
      this.renderer.addClass(document.body,'light-mode');
    }else{
      this.renderer.addClass(document.body, theme);
    }

  }

  isDarkMode():boolean{
   let theme = localStorage.getItem('theme-mode');
    return theme === 'dark-mode' ? true : false;
  }
  
  switchTheme():void{
    let theme = localStorage.getItem('theme-mode');
    if(theme === 'dark-mode'){
      localStorage.setItem('theme-mode','light-mode');
      this.renderer.removeClass(document.body,theme);
      this.renderer.addClass(document.body,'light-mode');
    }else{
      localStorage.setItem('theme-mode','dark-mode');
      this.renderer.removeClass(document.body,'light-mode');
      this.renderer.addClass(document.body,'dark-mode');
    }
  }

  //get channel categories
  getCategories():Observable<ChannelCategory[]>{
    return this.http.get<ChannelCategory[]>(`${this.apiUrl}/channels/categories`,this.httpOptions);
  }

  //getChannels
  getChannels(cat:string[]):Observable<any>{
    return this.http.get(`${this.apiUrl}/channels`,{...this.httpOptions,params:{cat}})
  }

  //get channel
  getChannel(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/channels/${id}`,this.httpOptions)
  }

  //get user channels
  getMyChannels():Observable<any>{
    return this.http.get(`${this.apiUrl}/channels/my-channels`,this.httpOptions);
  }

  //create channel
  createChannel(channel:Channel):Observable<any>{
    return this.http.post(`${this.apiUrl}/channels`,channel,this.httpOptions);
  }

  //update channel
  updateChannel(id:string,channel:Channel):Observable<any>{
    return this.http.put(`${this.apiUrl}/channels/${id}`,channel,this.httpOptions);
  }

   //delete channel
   deleteChannel(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/channels/${id}`,this.httpOptions);
  }

  //upload channel bg
  uploadChannelbg(img:FormData,id:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/channels/upload/${id}`,img,{withCredentials:true})
  }
}
