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

