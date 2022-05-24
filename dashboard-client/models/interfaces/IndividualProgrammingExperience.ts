import { fivePointLikertScale } from "models/enums/FivePointLikertScale";

export interface IndividualProgrammingExperience {
    ProgrammingExperienceYears: number;
    ProgrammingExperienceComparison: fivePointLikertScale;
    ProgrammingAbility: {[key: string]:fivePointLikertScale};
    ProgrammingComfort: {[key: string]:fivePointLikertScale};
}