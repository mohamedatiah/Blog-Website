import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { Blog } from '../classes/blog';
import { User } from '../classes/user';
>>>>>>> a036c6d520d53fd7c9fa68400fa4e12dacf00461
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
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
       

=======
// username:string='';
// firstname:string='';
// lastname:string='';
 follwingNumber=0;
 follwersNumber=0;
 likes=0;
//  title:string='';
//  age:string='';
comments:string;
displayComment:boolean=false;
 Blogs:Blog[];
 Users:User;
  constructor(public userService:UserService,public blogdata:BlogService ,public router:Router) {
    
   let id=localStorage.getItem('authorId');
      userService.getuser(id).subscribe(
        data=>{
        this.Users=data;
        data.followers.forEach(data=>this.follwersNumber++)
        data.followings.forEach(data=>this.follwingNumber++)
        
        // data.forEach(element => {
        //   if(element._id==id){
        //     this.username=element.username;
        //     this.firstname=element.firstname;
        //     this.lastname=element.lastname;
        //   element.followings.forEach(element=>{
        //       this.follwingNumber++;
        //   })
        //   element.followers.forEach(element=>{
        //     this.follwersNumber++;
        // })
         
        //    return ;
        //   }
        // });
     })
      
   blogdata.getmyblog(id).subscribe(
     data=>{
      console.log(data);
      this.Blogs=data;

    })
   }
   showComment(e){
    if(this.displayComment==true)
    { this.displayComment=false}
    else{
    //  var target = e.target || e.srcElement;
    //  target.style.color = 'blue';
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
         //this.router.navigateByUrl('editUser')

      }


   editPost(e){
      console.log(e.path[4].children[1].children[1].children[1].children[0].innerText);
      let id=e.path[4].children[1].children[1].children[1].children[0].innerText;
     // this.router.navigateByUrl('editPost')
    this.router.navigate(['editPost'], {​​ state: {​​ _id: id }​​ }​​);
   }
   delete(e){
     let Did=e.path[4].children[1].children[1].children[1].children[0].innerText;
     e.path[4].remove();
      this.blogdata.deletepost(Did).subscribe(
        a=>console.log(a)
     )

     
>>>>>>> a036c6d520d53fd7c9fa68400fa4e12dacf00461
   }

  ngOnInit(): void {
  }

}
