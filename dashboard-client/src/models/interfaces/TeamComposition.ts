import { role } from "../enums/Role";

export interface IndividualMeasures{
    TeamId : string;
    TeamSize : number;
    CodeRepo : string;
    ResourcesURL : string;
    TeamLeader : role;
    TeamManager : role;
    SocialLeader : role;
}
