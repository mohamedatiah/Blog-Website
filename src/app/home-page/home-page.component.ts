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
followedUserData:User;
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
      
      this.displayAddComment=true;
    }
        
  }

  confirmAddcomment(e,data){
   if(data.length<5){
          e.preventDefault();
          
   }
   else{
    let _authorId=e.path[2].children[1].children[1].children[2].innerText
    this.blogService.addcomment(_authorId,data).subscribe(data=>{
      this.displayAddComment=true;
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
        target.style.color = 'blue';
         this.addfollow=false;
       
     let myuser= this.getuserbyid(_authorId)
      this.userService.follow(_authorId,this.followedUserData).subscribe(data=>{
        console.log(data);
      })
      }
      else{
         target.style.color='rgba(65, 70, 136, 0.644)';
         this.addfollow=true;
      }
    }
    modalflag:boolean=false;
    openmodal(e,modal)
    {
       this.modalflag=true;
       console.log(this.modalflag)
    }
    
  ngOnInit(): void
   {
    
   }

}
