import { Component, Inject, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{User} from '../classes/user'
import{Blog} from '../classes/blog'
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { DOCUMENT } from '@angular/common';
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
  constructor(@Inject(DOCUMENT) document,public blogService:BlogService,public userService:UserService,public http:HttpClient,private router:Router) 
  {
    blogService.getdata().subscribe(data=>{
      this.Blogs=data;
      console.log(data)
  
          })

          userService.getusers().subscribe(data=>{
          this.Users=data;
          console.log(this.Users)
                })
  }
   like(e){
    var target = e.target || e.srcElement;
    target.style.color = 'blue';
   }
   addcomment(e){
     if(this.displayAddComment==true){ this.displayAddComment=false}
     else{
      var target = e.target || e.srcElement;
      target.style.color = 'blue';
      console.log(e)
      this.displayAddComment=true;
    }
        
  }

  confirmAddcomment(e,data){
   if(data.length<5){
          e.preventDefault();
          
   }
   else{
         
   }
  }
   
    follow(e){
      var target = e.target || e.srcElement;
      if(this.addfollow==true){
        
        target.style.color = 'blue';
         this.addfollow=false;
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
