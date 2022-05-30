import { fivePointLikertScale } from "../enums/FivePointLikertScale";

export interface IndividualMeasures{
    Motivation:{[key: string]: fivePointLikertScale[]};
    MotivationOther: string[];
    EventParticipation : number[];
}
