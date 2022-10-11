import { ProfessionName, ProfessionSpecialization } from "./profession";

export interface Character {
    name: string,
    professionA?: string, 
    professionSpecializationA?: string,
    professionPatternsA?: string,
    professionB?: string, 
    professionSpecializationB?: string,
    professionPatternsB?: string,
    _id?: string;
}
