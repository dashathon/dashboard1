import { fivePointLikertScale } from "../enums/FivePointLikertScale";
export interface IndividualMeasures{
    SatisfactionWithProcess:{
        Effiency: fivePointLikertScale,
        Coordination: fivePointLikertScale,
        Fairness: fivePointLikertScale,
        Understanding: fivePointLikertScale,
    };
    GoalClarty:{[key: string]: fivePointLikertScale}
    Voice:{[key: string]: fivePointLikertScale}
}