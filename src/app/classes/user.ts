export class User {
    constructor(public _id:string,public  username:string,public password:string,public firstname:string
        ,public lastname:string,public email:string,public age:number,followers:User,followings:User,
        public image:string,public token:string
        )
        {

        }
}
