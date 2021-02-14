import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Blog } from '../classes/blog';
import { User } from '../classes/user';
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Blogs:Blog[];
  Users:User[];
NodataSearchResult:boolean=false;
  constructor(blogService:BlogService,public userservice:UserService) {
    let search=localStorage.getItem('search');
    blogService.searchByTitle(search).subscribe(res=>{
      if(res.length==0){
          blogService.searchByTag(search).subscribe(res=>{
            if(res.length==0){
             this.NodataSearchResult=true;
            }
            else{
            this.Blogs=res;
            }
          })
      }
      else{
      this.Blogs=res;
      console.log(res.length);
     
      }
      localStorage.removeItem('search'); 
 })
 }

  ngOnInit(): void {
  }

}
