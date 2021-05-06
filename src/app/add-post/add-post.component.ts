import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';
 import {FormGroup,FormBuilder, FormControl} from '@angular/forms'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [DatePipe]
})

export class AddPostComponent implements OnInit {
 
  postError:boolean=false;
  newblog: FormGroup;
  myDate= new Date();

 
  blog:Blog=new Blog;
  image!:File;

  constructor(public router:Router,public blogData:BlogService,public http:HttpClient, public fb: FormBuilder ) {
    this.newblog = this.fb.group({
      title: [''],
      body: [''],
      image: [''],
      tags: []
    });
   }



  addPost(){
    console.log(this.blog)
   
    console.log("hello")
     if(this.image){
     const formData=new FormData();

     formData.append('image',this.image);
     formData.append('tags',this.blog.tags);
     formData.append('title',this.blog.title);
     formData.append('body',this.blog.body);
     console.log(formData)
     this.blogData.addpostimage(formData).subscribe(
      a=>{
     this.router.navigateByUrl('profile')
     console.log(a)
      }
     )
   
  }
     else{
       console.log(this.blog);
      this.blogData.addpost(this.blog).subscribe(
          a=>
        this.router.navigateByUrl('profile')
        )
     }
 
    
  }
  uploadFile(event:any){
     const filelist:FileList=event.target.files;
    this.image=filelist[0];
  }
  ngOnInit(): void {
  
  }

}
