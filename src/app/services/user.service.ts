import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User} from '../classes/user'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
 
  getusers()
     {
       return this.http.get<User[]>(' http://myblogger22.herokuapp.com/users/');
     }
  Login(usr:string,password:string)
  {
    return this.http.post(' http://myblogger22.herokuapp.com/users/login',{
      "username":usr,"password":password
      });
  }
  //return true if user entered
  LogedIn(){
    return !!localStorage.getItem('token');
  }
  
}


