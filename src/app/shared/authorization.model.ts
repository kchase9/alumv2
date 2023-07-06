import { User } from "./user.model";

export class Authorized{
    constructor(
        public id: number,
        public authorize: boolean,
        public users : User[]
    ){}
}