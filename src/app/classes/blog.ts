import {User} from './user'
export class Blog {
constructor(public tags:[string],public createdAt:Date,public comments:[string],public image:string,
    public title:string,public body:string,public author:string){
        
    }
}
