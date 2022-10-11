import { ProfessionName, ProfessionSpecialization } from "./profession";
import * as mongodb from "mongodb";

export interface Character {
    name: string,
    professionA?: ProfessionName, 
    professionSpecializationA?: ProfessionSpecialization,
    professionPatternsA?: Array<string>,
    professionB?: ProfessionName, 
    professionSpecializationB?: ProfessionSpecialization,
    professionPatternsB?: Array<string>,
    _id?: mongodb.ObjectId;
}