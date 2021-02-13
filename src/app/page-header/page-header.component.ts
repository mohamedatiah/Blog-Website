import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Blog } from '../classes/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
searchFlag:boolean=true;
  SearchResult:Blog[];
  constructor(public router:Router,public blogdata:BlogService){router.navigateByUrl("/home")}
search(data){
localStorage.setItem("search",data);
this.router.navigate['/search'];

}

 logout(){
   localStorage.removeItem('token');
   localStorage.removeItem('authorId');
   this.router.navigateByUrl("/home");
   console.log("llllpogg")
 }

  
  ngOnInit(): void {
  }

}
