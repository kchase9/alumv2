import { Alumni } from "./alumni.model";

export class Sex{
    constructor(
        public id: number,
        public type: boolean,
        public alumnis: Alumni[]
    ){}
}