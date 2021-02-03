import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User} from '../classes/user'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
 
  getusers(){
    return this.http.get<User[]>(' http://myblogger22.herokuapp.com/users/');
   
  }
}


