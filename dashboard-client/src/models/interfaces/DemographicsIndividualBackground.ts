import { education } from "../enums/Education";
import { gender } from "../enums/Gender";
import { minority } from "../enums/Minority";
import { age } from "../enums/Age"
export interface DemographicsIndividualBackground {
    Age: age[]; 
    Gender: gender[];
    Education: education[];
    Minority: minority[];
}