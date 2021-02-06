import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [DatePipe]
})

export class AddPostComponent implements OnInit {
  //postForm: FormGroup;
  //userInput:string;
  //tags:string;
  //title:string;
  //image:string;
  //d:string="";
  //myblog:Blob=null
  postError:boolean=false;

  myDate= new Date();

  blog:Blog= new Blog([" "],this.myDate,[''],'','','','');

  constructor(public router:Router,public blogData:BlogService,public http:HttpClient  ) { 
  
  }



  addPost(){
    if(this.blog.body.length<9){
      this.postError=true;
    }
    else{
      this.postError=false;
     
    }
    this.blogData.addpost(this.blog).subscribe(
      a=>
    this.router.navigateByUrl('/profile')
    )
  }
  ngOnInit(): void {
  }

}
