import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{User} from '../classes/user'
import{Blog} from '../classes/blog'
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userNameError:number=0;
passwordError:number=0;
  _userName:string="";
  _password:string="";
  ExistingUser:number=0;
  correctDataFlag:number=0;

  constructor( private router:Router,public UsersData:UserService, public http:HttpClient) { 
    this.UsersData.getusers().subscribe(data=>{
      console.log(data);
})
}
  

  userNameChanged(data:string)
  {
    if(this._userName.length<2)
        {
            this.userNameError=1; 
            this._userName=data;  
        }
    else
        {
            this.userNameError=0;
            this._userName=data;
           
        }
  }
    passwordChanged(data:string)
    {
        if(this._password.length<2)
        {
         this.passwordError=1; 
         this._password=data;  
        }
     else
       {
        this.passwordError=0;
        this._password=data;
       }
  }
  Login(e:any)
  {
    console.log(e)
    console.log(this._userName)
    console.log(this._password)
    console.log(this.passwordError)
    console.log(this.userNameError)
    if(this.passwordError==0&&this.userNameError==0)
    {
      
      this.UsersData.Login(this._userName,this._password).subscribe(data=>{
              
                  localStorage.setItem("token",data["token"]);
                  this.router.navigateByUrl("home");
              },err=>{
               if(err.status==401){
                 alert("your data is not found try to register")
               }
              })
    }
  }
Register(){
  this.router.navigateByUrl("/register");
}

  ngOnInit(): void {
  }

}
