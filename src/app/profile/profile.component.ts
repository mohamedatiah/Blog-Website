import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username:string='';
firstname:string='';
lastname:string='';
 follwingNumber=0;
 follwersNumber=0;
 title:string='';
 age:string='';
  constructor(userService:UserService,blogdata:BlogService) {
    
   let id=localStorage.getItem('authorId');
      userService.getusers().subscribe(data=>{
        data.forEach(element => {
          if(element._id==id){
            this.username=element.username;
            this.firstname=element.firstname;
            this.lastname=element.lastname;
          this.age=element.age;
          element.followings.forEach(element=>{
              this.follwingNumber++;
          })
          element.followers.forEach(element=>{
            this.follwersNumber++;
        })
         
           return ;
          }
        });
      })
      
   blogdata.getSpecificUser(id).subscribe(data=>{
     console.log(data);
   })
       

   }

  ngOnInit(): void {
  }

}
