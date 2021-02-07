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
    return this.http.get<Blog[]>('https://myblogger22.herokuapp.com',{headers:{skip:"true"}});
  }
  // ,formData:FormData
  addpost(blog:Blog){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/add',blog);
    //with image
   //  return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs',{blog,formData});
  //  return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs',blog, {headers:{skip:"true"}});
  }
  searchByTitle(title:string){
    return this.http.get<Blog[]>(`https://myblogger22.herokuapp.com/blogs/title/${title}`);
  }
  addcomment(_id,comment){
    return this.http.post<Blog>(`https://myblogger22.herokuapp.com/blogs/comment/${_id}`,{"comments":comment});

  }
 

}


