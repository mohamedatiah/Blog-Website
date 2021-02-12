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
 
  addpostimage(formData:FormData){
    //with image
    return this.http.post('https://myblogger22.herokuapp.com/blogs/addimg',formData);
  //  return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs',blog, {headers:{skip:"true"}});
  }
  addpost(blog:Blog){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/add',blog);
  }
  searchByTitle(title:string){
    return this.http.get<Blog[]>(`https://myblogger22.herokuapp.com/blogs/title/${title}`);
  }
  addcomment(_id,comment){
    return this.http.post<Blog>(`https://myblogger22.herokuapp.com/blogs/comment/${_id}`,{"comments":comment});

  }
  like(id){
    return this.http.post<Blog>('https://myblogger22.herokuapp.com/blogs/like/',+id);
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


