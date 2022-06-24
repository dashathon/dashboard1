import { fivePointLikertScale } from "../enums/FivePointLikertScale";

export interface EventMeasures {
    SatisfactionWithHackathon:{
        Satisfaction: fivePointLikertScale[];
        Pleasure: fivePointLikertScale[];
        Contended: fivePointLikertScale[];
        Delighted: fivePointLikertScale[];
    }

    FutureParticipationIntentions: fivePointLikertScale[];
    RecommendationLikelyness: number[];
    SessionSatisfaction: Session[];
    SessionUsefulness: Session[];
    SessionEnjoyment:  Session[];
    GoodEvent: string[];
    ImproveEvent: string[] //421
    OpenSharing: string[]; //todo: einspeichern mit id 431
}

export interface Session {
    PreEventWebinar: fivePointLikertScale;
    Checkpoints: fivePointLikertScale;
    MentoringSessions: fivePointLikertScale;
}