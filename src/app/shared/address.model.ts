import { Alumni } from "./alumni.model";
import { Country } from "./country.model";

export class Address{
    constructor(
        public id: number,
        public addressL1 : string,
        public addressL2: string,
        public city: string,
        public zipCode : string,
        public countryID: number,
        public country : Country,
        public alumni : Alumni
    )
    {}
}