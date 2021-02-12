import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  blog:Blog;
  constructor(public blogservice:BlogService,public router:Router ,public http:HttpClient) {
    console.log(this.router.getCurrentNavigation().extras.state._id);
    let id=this.router.getCurrentNavigation().extras.state._id;
    blogservice.getpostbyid(id).subscribe(
      a=>{
      this.blog=a
      console.log(this.blog)
      }
    )
   }
  
  editPost(){
      this.blogservice.editpost(this.blog._id,this.blog).subscribe(
            a=> 
            {
            console.log(a);
            this.router.navigateByUrl("profile");
           
            })
  }
  ngOnInit(): void {
    
  }

}
