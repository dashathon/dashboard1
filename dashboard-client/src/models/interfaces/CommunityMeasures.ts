import { fivePointLikertScale } from "../enums/FivePointLikertScale";

export interface CommunityMeasures{
    CommunityIdentification:{[key: string]: fivePointLikertScale};
    SocialCapital: {[key: string]: fivePointLikertScale};
}
