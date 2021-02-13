import {User} from './user'
export class Blog {

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
}
// constructor(public tags:string,public createdAt:Date,public comments:[string],public image:string,
//     public title:string,public body:string,public author:string){
        
//     }
// 

