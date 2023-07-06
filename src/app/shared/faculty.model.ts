import { Program } from "./program.model";

export class Faculty{
    constructor(
        public id: number,
        public name: string,
        public programs: Program[]

    ){}
}