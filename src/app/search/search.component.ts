import { Component, OnInit } from '@angular/core';
import { Blog } from '../classes/blog';
import { User } from '../classes/user';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Blogs:Blog[];
  Users:User[];

  constructor(blogService:BlogService) {
    let search=localStorage.getItem('search');
    blogService.searchByTitle(search).subscribe(res=>{
      this.Blogs=res;
      localStorage.removeItem('search');
      
 })
 }

  ngOnInit(): void {
  }

}
