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
follwingNumber:number;
follwersNumber:number;
  constructor(@Inject(DOCUMENT) document,public blogService:BlogService,public userService:UserService,public http:HttpClient,private router:Router) 
  {
    let token=localStorage.getItem('token');
    let id=localStorage.getItem('authorId');
    if(token!=null){
      
    }
    blogService.getdata().subscribe(data=>{
      this.Blogs=data;
      console.log(data)
   
    })
   
   
  //  let id=localStorage.getItem('authorId');
    userService.getusers().subscribe(data=>{
      console.log(data)
      data.forEach(element => {
        if(element._id==id){
        this.followedUserData=element;
        element.followings.forEach(element=>{
            this.follwingNumber++;
        })
        element.followers.forEach(element=>{
          this.follwersNumber++;
      })
       
         return ;
        }
      });
    })
        
             
    
     
  }


   like(e){
    
    let _authorId=e.path[4].children[1].children[1].children[3].innerText;
    var target = e.target || e.srcElement;
    if(target.style.color!='blue'){
    this.blogService.like(_authorId,this.followedUserData).subscribe(data=>{
      target.style.color = 'blue';
    })
   }
   else{
    this.blogService.unlike(_authorId,this.followedUserData).subscribe(data=>{
     
      target.style.color='rgba(65, 70, 136, 0.644)';
    })
   }

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
      let _authorId:string=e.path[4].children[1].children[1].children[2].innerText;
      let loginedId=localStorage.getItem('authorId');
    
      console.log( _authorId)
      console.log(loginedId)
      console.log(typeof loginedId)
   console.log(e.target.style[0])
      if(target.style.color!='blue'){
      
       
    
      this.userService.follow(loginedId,_authorId,this.followedUserData).subscribe(data=>{
        target.style.color = 'blue';
      
        this.addfollow=true;
        console.log(data)
      })
      }
      else{
         
         this.userService.unfollow(loginedId,_authorId,this.followedUserData).subscribe(data=>{
         
          target.style.color='rgba(65, 70, 136, 0.644)';
          this.addfollow=true;
          console.log(data)
        })
      }
    }
    
  ngOnInit(): void
   {

  
   }

}
