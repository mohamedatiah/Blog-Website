import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

<<<<<<< HEAD
  constructor(public router:Router) { 
    localStorage.removeItem('token');
    localStorage.removeItem('authorId');
  }
=======
  constructor(public router:Router) {
    localStorage.removeItem('token');
    localStorage.removeItem('authorId');
   }
>>>>>>> a036c6d520d53fd7c9fa68400fa4e12dacf00461
cancel(){
  this.router.navigateByUrl('home')
}
login()
{
  this.router.navigateByUrl('login')
}
  ngOnInit(): void {
  }

}
