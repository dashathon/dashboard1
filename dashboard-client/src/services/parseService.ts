import { age } from "src/models/enums/Age";
import { fivePointLikertScale } from "src/models/enums/FivePointLikertScale";
import { CommunityMeasures } from "src/models/interfaces/CommunityMeasures";
import { IndividualMeasures } from "src/models/interfaces/IndividualMeasures";
import { TeamComposition } from "src/models/interfaces/TeamComposition";
import { TeamProcess } from "src/models/interfaces/TeamProcess";

export class parseService {
//#region Instances
    public individualMeasures : IndividualMeasures = {
        Motivation: {},
        MotivationOther: [],
        EventParticipation : [],
    };
    public teamComposition : TeamComposition = {
        TeamId: [],
        TeamSize: [],
        CodeRepo: [],
        ResourcesURL: [],
        TeamLeader: [],
        TeamManager: [],
        SocialLeader: [],
    }
//#endregion
//#region exampleData
    readonly as : string[] = [
        'Team1', 'asfmasf'
    ];
    readonly exampleString : string = 'exampleString';
//#endregion
    constructor() {

     }
     getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }
      
    getAge(pAge: number): age {
      return age.Range1
    }
    getFivePointScala(answer: number): number {
        switch(answer) { 
            case 0: { 
               return fivePointLikertScale.Least; 
               break; 
            } 
            case 1: { 
               return fivePointLikertScale.MediumLeast; 
               break; 
            }
            case 2: { 
                return fivePointLikertScale.Medium; 
                break; 
             }
             case 3: { 
                return fivePointLikertScale.MediumMax; 
                break; 
             }
             case 4: { 
                return fivePointLikertScale.Max; 
                break; 
             }
            default: { 
                throw new Error('number out of range')
               //statements; 
               break; 
            } 
        }
    }


     insertIndividualMeasures() : void{
        this.individualMeasures.Motivation['Making something cool / Working on an interesting project idea'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Learning new tools or skills (Clary, understanding)'].push( this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['[HACKATHON_THEME]'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Meeting new people'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Seeing what others are working on'].push( this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Sharing my experience and expertise'].push( this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Joining friends that participate (Clary, social)'].push( this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Dedicated time to get work done'].push( this.getFivePointScala(this.getRandomInt(5)));
        this.individualMeasures.Motivation['Wind a prize'].push( this.getFivePointScala(this.getRandomInt(5)))
        this.individualMeasures.Motivation['Having fun'].push( this.getFivePointScala(this.getRandomInt(5)));

        this.individualMeasures.MotivationOther.push(this.exampleString);
        this.individualMeasures.EventParticipation.push(this.getRandomInt(5));
    }

    /*insertTeamProcess() : void{
        const tm : TeamProcess = {
            SatisfactionWithProcess:{
                Effiency: this.getFivePointScala(this.getRandomInt(5)),
                Coordination: this.getFivePointScala(this.getRandomInt(5)),
                Fairness: this.getFivePointScala(this.getRandomInt(5)),
                Understanding: this.getFivePointScala(this.getRandomInt(5)),
            },
            GoalClarty:{
                'I was uncertain of my duties and responsibilities in this team.' : this.getFivePointScala(this.getRandomInt(5)),
                'I was unclear about the goals and objectives for my work in this team.' : this.getFivePointScala(this.getRandomInt(5)),
                'I was unsure how my work relates to the overall objectives of my team.' : this.getFivePointScala(this.getRandomInt(5)),
            },
            Voice:{
                'Everyone had a chance to express his/her opinion.' : this.getFivePointScala(this.getRandomInt(5)),
                'The team members responded to the comments made by others.' : this.getFivePointScala(this.getRandomInt(5)),
                'The team members participated very actively during the project.' : this.getFivePointScala(this.getRandomInt(5)),
                'Overall, the participation of each member in the team was effective.' : this.getFivePointScala(this.getRandomInt(5)),

            }
        }
    }
    */

  }