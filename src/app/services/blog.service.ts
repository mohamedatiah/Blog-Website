import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Blog} from '../classes/blog'
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }
  getdata(){
    return this.http.get<Blog[]>('https://myblogger22.herokuapp.com',{headers:{skip:"true"}});
  }
 
  addpostimage(formData:FormData){
    //with image
    return this.http.post('https://myblogger22.herokuapp.com/blogs/addimg',formData);
  }
  addpost(blog:Blog){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/add',blog);
  }
  searchByTitle(title:string){
    return this.http.get<Blog[]>(`https://myblogger22.herokuapp.com/blogs/title/${title}`);
  }
  searchByName(title:string){
    return this.http.get<Blog[]>(`https://myblogger22.herokuapp.com/blogs/title/${title}`);
  }
  searchByTag(title:string){
    return this.http.get<Blog[]>(`https://myblogger22.herokuapp.com/blogs/tags/${title}`);
  }
  addcomment(_id,comment)
  {
    console.log(_id)
    _id="600ee90d374bfa001552eb48";
    return this.http.patch<Blog>(`https://myblogger22.herokuapp.com/blogs/comment/${_id}`,{"comments":comment});
  }

  getSpecificUser(_id){
    return this.http.get<Blog>(`https://myblogger22.herokuapp.com/users/${_id}`);
}

  like(id,data:User){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/like/'+id,data);
  }
  unlike(id,data:User){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/unlike/'+id,data);
  }
  getmyblog(id){
    return this.http.get<Blog[]>('https://myblogger22.herokuapp.com/blogs/getmyblog/'+id);
  }
 
  editpost(id,blog:Blog){
    return this.http.patch<Blog>('https://myblogger22.herokuapp.com/blogs/'+id,blog);
  }
  deletepost(id){
    return this.http.delete<Blog>('https://myblogger22.herokuapp.com/blogs/'+id);
  }
  getpostbyid(id){
    return this.http.get<Blog>('https://myblogger22.herokuapp.com/blogs/'+id)
  }

}


