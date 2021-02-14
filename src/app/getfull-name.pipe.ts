import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from './services/user.service';
import{User} from '../app/classes/user'
import { delay,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { Blog } from './classes/blog';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { promise } from 'protractor';
@Pipe({
  name: 'getfullName',
  pure: true
})
export class GetfullNamePipe implements PipeTransform {

  constructor(public userservice:UserService,private http:HttpClient,public blogdata:BlogService){}
   transform(value: string, args?: any):any {
    return this.blogdata.getmyblog(value).pipe(map(res => { // changed the subscribe
      console.log(res[0].likes.length)
       return res[0].likes.length;
      }
    ));
  }
}