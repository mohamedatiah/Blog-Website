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
user:User= new User('','','','','','',0,'','','','');
  constructor(public router:Router,public userservice:UserService,public http:HttpClient ) { }
  Adduser(){
    this.userservice.register(this.user).subscribe(
      a=>this.router.navigateByUrl('login')
        )
  }
  ngOnInit(): void {
  }

}
