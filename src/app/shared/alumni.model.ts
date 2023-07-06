import { Address } from "./address.model";
import { Enrollment } from "./enrollment.model";
import { Sex } from "./sex.model";
import { User } from "./user.model";

export class Alumni{
    constructor(
        public id : number,
        public fName : string,
        public lName : string,
        public DOB : Date,
        public email : string,
        public jobTitle : string,
        public bio : string,
        public imageURL: string,
        public isActive : boolean,
        public sexID : number,
        public sex : Sex,
        public address : Address,
        public user: User,
        public enrollment :Enrollment[],

    ){}
}