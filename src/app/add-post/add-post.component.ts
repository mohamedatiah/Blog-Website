import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  userInput:string;
  d:string="";
  myblog:Blob=null
  postError:boolean=false;
  constructor(public router:Router,public blogData:BlogService) { }
  addPost(){
    if(this.userInput.length<9){
      this.postError=true;
    }
    else{
      this.postError=false;
     
    }
  }
  ngOnInit(): void {
  }

}
