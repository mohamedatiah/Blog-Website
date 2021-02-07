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
       
     let s= this.http.get<User[]>(' http://myblogger22.herokuapp.com/users/');
     console.log(s)
     return s;
     }
  Login(usr:string,password:string)
  {
    return this.http.post(' http://myblogger22.herokuapp.com/users/login',{
      "username":usr,"password":password
      }, {headers:{skip:"true"}});
  }

  //return true if user entered
  LogedIn(){
    return !!localStorage.getItem('token');
  }
  follow(_id:string,data:User){
    return this.http.post(`https://myblogger22.herokuapp.com/users/follow/${_id}`,data);
  }
  unfollow(_id:string,data:User){
    return this.http.post(`https://myblogger22.herokuapp.com/users/follow/${_id}`,data);
  }
  register(f_name,l_name,usrname,age,pass){
    age=String(age);
   pass=String(pass);
    l_name=String(l_name)

    return this.http.post<User>('https://myblogger22.herokuapp.com/users/register'
    ,{"firstname":f_name,"lastname":l_name,"username":usrname,"age":33,"password":pass}, {headers:{skip:"true"}});
  }
}


