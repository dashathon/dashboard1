import { fivePointLikertScale } from "../enums/FivePointLikertScale";
export interface ProjectMeasures{
    SatisfactionWithOutcome: {[key: string]: fivePointLikertScale};
    PerceivedUsefulness: {[key: string]: fivePointLikertScale};
    ContinuationIntentions: {[key: string]: fivePointLikertScale};
    BehavioralControl: {[key: string]: fivePointLikertScale};

}