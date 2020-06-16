export class User {
    id : number;
    fname : string;
    lname : string;
    password : string;
    email : string;
    balance : number;
    role : Role;
    autoTrade : boolean;

}

export class Role{
    id : number;
    roleName : string;
}