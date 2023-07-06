import { Alumni } from "./alumni.model";
import { Degree } from "./degree.model";
import { Program } from "./program.model";

export class Enrollment{
    constructor(
        public id: number,
        public yearStarted: Date,
        public yearGraduated: Date,
        public degreeID: number,
        public degree: Degree,
        public programID: number,
        public program: Program,
        public alumniID: number,
        public alumni: Alumni
    ){}
}