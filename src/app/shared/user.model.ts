import { Alumni } from "./alumni.model";
import { Authorized } from "./authorization.model";
import { Degree } from "./degree.model";

export class User{

    constructor(
        public id: number,
        public email: string,
        public password:  string,
        public alumni: Alumni,
        public authorizedID: number,
        public authorized: Authorized

    ){}
}