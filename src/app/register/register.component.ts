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
  

  constructor(public router:Router,public userservice:UserService,public http:HttpClient ) { }
  Adduser(f_name,l_name,usrname,age,pass){
    console.log(f_name);
    
  this.userservice.register(f_name,l_name,usrname,age,pass)
    .subscribe(data=>{
      console.log(data);
    })
      
  }
  ngOnInit(): void {
  }

}
