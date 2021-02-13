import {User} from './user'
export class Blog {
<<<<<<< HEAD
constructor(public tags:[string],public createdAt:Date,public comments:[string],public image:string,
    public title:string,public body:string,public author:string){
   }
=======
    tags!:string;
    createdAt!:Date;
    comments!:string[];
    image!:string;
    title!:string;
    body!:string;
    author!:string;
    likes!:[string];
    _id!:string;
    constructor(){}
>>>>>>> a036c6d520d53fd7c9fa68400fa4e12dacf00461
}
// constructor(public tags:string,public createdAt:Date,public comments:[string],public image:string,
//     public title:string,public body:string,public author:string){
        
//     }
// 

