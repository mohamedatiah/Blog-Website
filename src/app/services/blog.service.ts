import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Blog} from '../classes/blog'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }
  getdata(){
    return this.http.get<Blog[]>('https://myblogger22.herokuapp.com');
  }
  addpost(blog:Blog){
    return this.http.post('https://myblogger22.herokuapp.com/',blog);
  }
  follow(){
    
  }

}


