import { age } from "src/models/enums/Age";
import { fivePointLikertScale } from "src/models/enums/FivePointLikertScale";
import { CommunityMeasures } from "src/models/interfaces/CommunityMeasures";
import { TeamComposition } from "src/models/interfaces/TeamComposition";

export class parseService {

    readonly teams : string[] = [
        'Team1', 'Team2', 'Team3', 'Team4', 'Team5'
    ]
    readonly exampleString : string = 'exampleString'

    constructor() {
     }
     getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }
      
    getAge(pAge: number): age {
      return age.Range1
    }

    getRole(answer: number): number{
        switch(answer) { 
            case 0: { 
               return role.Yes; 
               break; 
            } 
            case 1: { 
                return role.SomeOneElse; 
                break; 
            } 
            case 2: { 
                return role.Nobody; 
                break; 
            } 
            default: { 
                throw new Error('number out of range')
               //statements; 
               break; 
            } 
        }
    }

    getFivePointScala(answer: number): number {
        switch(answer) { 
            case 0: { 
               return fivePointLikertScale.Least; 
               break; 
            } 
            case 1: { 
               return fivePointLikertScale.Least; 
               break; 
            } 
            default: { 
                throw new Error('number out of range')
               //statements; 
               break; 
            } 
        }
    }


     getCommunityMeasures() : CommunityMeasures{
        const cm : CommunityMeasures = {
            CommunityIdentification: {
                'Having fun' : this.getFivePointScala(this.getRandomInt(5)),
                'Making something cool / Working on an interesting project idea': this.getFivePointScala(this.getRandomInt(5)),
                'Learning new tools or skills (Clary, understanding)' : this.getFivePointScala(this.getRandomInt(5))
            },
            SocialCapital: {
                'asfas' : fivePointLikertScale.Medium,
            }
            //asmf = as[this.getRandomInt()]
        }
        return cm;
    }

    getTeamComposition() : TeamComposition{
        const tm : TeamComposition = {
            TeamId: this.teams[this.getRandomInt(5)],
            TeamSize : this.getRandomInt(5),
            CodeRepo : this.exampleString,
            ResourcesURL : this.exampleString,
            TeamLeader : this.getRole(this.getRandomInt(3)),
            TeamManager : this.getRole(this.getRandomInt(3)),
            SocialLeader : this.getRole(this.getRandomInt(3)),
        }
    }
  }