
import { fivePointLikertScale } from "../enums/FivePointLikertScale";
import { Satisfaction } from "../enums/Satisfaction";

export interface TeamProcess{
    SatisfactionWithProcess:{
        Efficiency: Satisfaction[],
        Coordination: Satisfaction[],
        Fairness: Satisfaction[],
        Clarity: Satisfaction[],
    };
    GoalClarty:{[key: string]: fivePointLikertScale[]}
    
    Voice:{[key: string]: fivePointLikertScale[]};
}