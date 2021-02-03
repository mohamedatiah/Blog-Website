import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{User} from '../classes/user'
import{Blog} from '../classes/blog'
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
Blogs:Blog[];
Users:User[];
  constructor(public blogService:BlogService,public userService:UserService,public http:HttpClient,private router:Router) 
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
   
   
  ngOnInit(): void
   {
    
   }

}
