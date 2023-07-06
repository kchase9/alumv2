import { Enrollment } from "./enrollment.model";
import { Faculty } from "./faculty.model";

export class Program{
    constructor(
        public id: number,
        public name: string,
        public faculty: Faculty,
        public enrollments: Enrollment[]
    ){}
}