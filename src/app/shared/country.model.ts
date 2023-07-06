import { Address } from "./address.model";

export class Country{
    constructor(
        public id: number,
        public name: string,
        public addresses : Address[]
    ){}
}