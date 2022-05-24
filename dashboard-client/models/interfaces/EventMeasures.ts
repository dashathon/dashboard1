import { Session } from "inspector";
import { fivePointLikertScale } from "../enums/FivePointLikertScale";
import { session } from "../enums/Session";

export interface EventMeasures {
    SatisfactionWithHackathon:{
        Satisfaction: fivePointLikertScale;
        Pleasure: fivePointLikertScale;
        Contended: fivePointLikertScale;
        Delighted: fivePointLikertScale;
    }

    FutureParticipationIntentions: fivePointLikertScale;
    RecommendationLikelyness: number;
    SessionSatisfaction: Sessions;
    SessionUsefulness: Sessions;
    SessionEnjoyment:  Sessions;
    GoodEvent: string;
}

interface Sessions {
    PreEventWebinar: fivePointLikertScale;
    Checkpoints: fivePointLikertScale;
    MentoringSessions: fivePointLikertScale;
}