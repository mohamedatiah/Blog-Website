import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  f_nameError:boolean=false;
  l_nameError:boolean=false;
  usernameError:boolean=false;
  passError:boolean=false;
  UserData:User;
  constructor(public router:Router,public userservice:UserService,public http:HttpClient ) { 
   let id=localStorage.getItem('authorId');
   userservice.getuser(id).subscribe(data=>{
     this.UserData=data;
   })
  }
  Adduser(e,f_name,l_name,usrname,pass){
  if(f_name.length<4){
      this.f_nameError=true;
  }
  else{
    this.f_nameError=false;
  }
  if(l_name.length<4){
    this.l_nameError=true;
  }else{
    this.l_nameError=false;
  }
  
  if(pass.length<8){
    this.passError=true;
  }else{
    this.passError=false;
  }
  if(usrname.length<8){
    this.usernameError=true;
  }else{
    this.usernameError=false;
  }
   if(this.passError||this.f_nameError||this.l_nameError||this.usernameError){
     e.PreventDefault();
   } 
   else{
    let _id=localStorage.getItem('authorId');
  this.userservice.edituser(_id,f_name,l_name,usrname,pass)
    .subscribe(data=>{
        localStorage.removeItem('authorId');
        localStorage.removeItem('token');
        this.router.navigateByUrl('login');
    },error => {
      alert("this user name is already found before. change your data please ");
  })
  }
  }

  ngOnInit(): void {
  }

}
