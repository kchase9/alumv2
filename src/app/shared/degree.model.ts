import { Enrollment } from "./enrollment.model";

export class Degree
{
    constructor(
        public id: number,
        public name: string,
        public enrollment : Enrollment[]
    ){}
}