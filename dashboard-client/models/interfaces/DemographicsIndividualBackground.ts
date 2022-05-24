import { education } from "models/enums/Education";
import { gender } from "models/enums/Gender";
import { minority } from "models/enums/Minority";
import {age} from "../enums/Age"
export interface DemographicsIndividualBackground {
    Age: age; 
    Gender: gender;
    Education: education;
    Minority: minority;
}