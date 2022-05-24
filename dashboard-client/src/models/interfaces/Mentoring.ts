import { fivePointLikertScale } from "../enums/FivePointLikertScale";

export interface Mentoring{
    MentoringExperience:{[key: string]: fivePointLikertScale};
    MentoringOther: string;
}