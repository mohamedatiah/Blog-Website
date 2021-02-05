import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  constructor(public router:Router){router.navigateByUrl("/home")}
c(e){
  if(e.target.innerHTML=='home'){
       
  }
}
 

  
  ngOnInit(): void {
  }

}
