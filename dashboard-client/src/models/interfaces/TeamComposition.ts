import { role } from "../enums/Role";

export interface TeamComposition{
    TeamId : string[];
    TeamSize : number[];
    CodeRepo : string[];
    ResourcesURL : string[];
    TeamLeader : role[];
    TeamManager : role[];
    SocialLeader : role[];
}
