import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
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
  postForm: FormGroup;
  body:string;
  tags:string;
  title:string;
  //image:string;
  //d:string="";
  //myblog:Blob=null
  postError:boolean=false;

  myDate= new Date();

  blog:Blog= new Blog([" "],this.myDate,[''],'','','','');
  image:File;
  constructor(public router:Router,public blogData:BlogService,public http:HttpClient  ,private formBuilder: FormBuilder) { }
  // uploadFile(event:Event) {
  //   // const file = (event.target as HTMLInputElement).files[0];
  //   // this.postForm.patchValue({
  //   //   avatar: file
  //   // });
  //   // this.postForm.get('avatar').updateValueAndValidity()
  //   console.log("enterd event")
  // }


  addPost(){
    // if(this.blog.body.length<9){
    //   this.postError=true;
    // }
    // else{
    //   this.postError=false;
     
    // }
   
    //  console.log("hello")
    //  let formData=new FormData();
    //  formData.append('photo',this.image);
    //  this.blogData.addpost(this.blog,formData).subscribe(
    //   a=>
    // this.router.navigateByUrl('profile')
    // )
    this.blogData.addpost(this.blog).subscribe(
      a=>
    this.router.navigateByUrl('home')
    )
    
    
  }
  // uploadFile(event:any){
  //   const filelist:FileList=event.target.files;
  //   this.image=filelist[0];
  // }
  ngOnInit(): void {
  
  }

}
