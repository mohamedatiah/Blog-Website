import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  f_nameError:boolean=false;
  l_nameError:boolean=false;
  usernameError:boolean=false;
  ageError:boolean=false;
  passError:boolean=false;

  constructor(public router:Router,public userservice:UserService,public http:HttpClient ) { }
  Adduser(e,f_name,l_name,usrname,age,pass){
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
  if(parseInt(age)<14||parseInt(age)>100){
    this.ageError=true;
  }else{
    this.ageError=false;
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
   if(this.passError||this.f_nameError||this.l_nameError||this.ageError||this.usernameError){
     e.PreventDefault();
   } 
   else{
  this.userservice.register(f_name,l_name,usrname,age,pass)
    .subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('login')
    })
  }
  }
  ngOnInit(): void {
  }

}