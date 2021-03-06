import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../classes/blog';
import { User } from '../classes/user';
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 follwingNumber=0;
 follwersNumber=0;
 likes=0;

comments:string[];
displayComment:boolean=false;
 Blogs:Blog[];
 Users:User;
  constructor(public userService:UserService,public blogdata:BlogService ,public router:Router) {
    
   let id=localStorage.getItem('authorId');
      userService.getuser(id).subscribe(
        data=>{
        this.Users=data;
        console.log(data)
       data.followers.forEach(data=>this.follwersNumber++)
        data.followings.forEach(data=>this.follwingNumber++)
        
     })
      
   blogdata.getmyblog(id).subscribe(
     data=>{
      console.log(data[0].comments);
      this.Blogs=data;

          this.Blogs.forEach(element => {
            console.log(element.likes.length)
          });
    })
   }
   showComment(e){
    if(this.displayComment==true)
    { this.displayComment=false}
    else{
    this.displayComment=true;
   }
   }

   deleteuser(){
     console.log("hii")
     let id=localStorage.getItem('authorId');
    localStorage.removeItem('token');
    localStorage.removeItem('authorId');
      this.userService.deleteuser(id).subscribe(
        a=>
        {
          console.log(a);
          
        }
     )
      this.router.navigateByUrl('home')
      
   }
   edituser(){
         this.router.navigateByUrl('edituser')

      }
      likees:Number;
    

   editPost(e){
      console.log(e.path[4].children[1].children[1].children[1].children[0].innerText);
      let id=e.path[4].children[1].children[1].children[1].children[0].innerText;
  
    this.router.navigate(['editPost'], {​​ state: {​​ _id: id }​​ }​​);
   }
   delete(e){
     let Did=e.path[4].children[1].children[1].children[1].children[0].innerText;
     e.path[4].remove();
      this.blogdata.deletepost(Did).subscribe(
        a=>console.log(a)
     )

     
   }

  ngOnInit(): void {
  }

}