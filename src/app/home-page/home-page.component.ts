import { Component, Inject, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{User} from '../classes/user'
import{Blog} from '../classes/blog'
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { DOCUMENT } from '@angular/common';
import{GetfullNamePipe} from '../getfull-name.pipe'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
Blogs:Blog[];
Users:User[];
mycomment:string="";
displayAddComment:boolean=false;
addlike:boolean=false;
addfollow:boolean=false;
followedUserData:User;
authorForBlogs=[];
f_name:string;
myarr:string[];

  constructor(@Inject(DOCUMENT) document,public blogService:BlogService,public userService:UserService,public http:HttpClient,private router:Router) 
  {
    let token=localStorage.getItem('token');
    let id=localStorage.getItem('authorId');
    if(token!=null){
      
    }
    blogService.getdata().subscribe(data=>{
      this.Blogs=data;
       data.forEach(element => {
          element.likes.forEach(element => {
            if(element==id){
              
            }
          });
       });
    })
   
    userService.getusers().subscribe(data=>{
         this.Users=data;
         })
        
             
    
     
  }


   like(e){
    console.log(e)
    let _authorId=e.path[4].children[1].children[1].children[3].innerText;
    console.log(_authorId);
    console.log(typeof _authorId)
    this.blogService.like(_authorId).subscribe(data=>{
      var target = e.target || e.srcElement;
      target.style.color = 'blue';
    })
   

   }
   addcomment(e){
     if(this.displayAddComment==true){ this.displayAddComment=false}
     else{
      this.displayAddComment=true;
    }
        
  }

  confirmAddcomment(e,data){
   if(data.length<5){
     alert("minumum length for comment is 5 character")
          e.preventDefault();
          
   }
   else{
    let _authorId=e.path[2].children[1].children[1].children[3].innerText
    this.blogService.addcomment(_authorId,data).subscribe(data=>{
      this.displayAddComment=false;
      console.log(data)
    })
   }
  }
   getuserbyid(_id){
        this.userService.getusers().subscribe(data=>{
          data.forEach(element => {
            if(element._id==_id){
              this.followedUserData=element;
             return ;
            }
          });
        })
   }
    follow(e){
      var target = e.target || e.srcElement;
      let _authorId=e.path[4].children[1].children[1].children[2].innerText;

      if(this.addfollow==true){
      
       
     let myuser= this.getuserbyid(_authorId)
      this.userService.follow(_authorId,this.followedUserData).subscribe(data=>{
        target.style.color = 'blue';
        this.addfollow=false;
      })
      }
      else{
         target.style.color='rgba(65, 70, 136, 0.644)';
         this.addfollow=true;
      }
    }
    
  ngOnInit(): void
   {

  
   }

}
