import { HttpClient } from '@angular/common/http';
// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { element } from 'protractor';
import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';
// import {FormGroup,FormBuilder, FormControl} from '@angular/forms'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [DatePipe]
})

export class AddPostComponent implements OnInit {
  // postForm: FormGroup;
  // body:string;
  // tags:string;
  // title:string;
  //image:string;
  //d:string="";
  //myblog:Blob=null
  postError:boolean=false;

  myDate= new Date();

 // blog:Blog= new Blog(" ",this.myDate,[''],'','','','');
  blog:Blog= new Blog;
  image!:File;
  constructor(public router:Router,public blogData:BlogService,public http:HttpClient ) { }



  addPost(){
   
    console.log("hello")
     if(this.image){
     const formData=new FormData();
     formData.append('image',this.image);
     formData.append('tags',this.blog.tags);
     formData.append('title',this.blog.title);
     formData.append('body',this.blog.body);
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
