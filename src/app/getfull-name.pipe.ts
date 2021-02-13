import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from './services/user.service';
import{User} from '../app/classes/user'
import { delay,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Pipe({
  name: 'getfullName',
  pure: true
})
export class GetfullNamePipe implements PipeTransform {
  constructor(public userservice:UserService,private http:HttpClient){}
  transform(value: string, args?: any): any {
   return this.userservice.getuser(value).pipe(map(res =>{
      console.log(res)
      return res}))
  }
   
  
  
  
       
    
 }
