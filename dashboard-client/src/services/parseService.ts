import { age } from "src/models/enums/Age";
import { fivePointLikertScale } from "src/models/enums/FivePointLikertScale";
import { CommunityMeasures } from "src/models/interfaces/CommunityMeasures";
import { IndividualMeasures } from "src/models/interfaces/IndividualMeasures";
import { TeamComposition } from "src/models/interfaces/TeamComposition";
import { TeamProcess } from "src/models/interfaces/TeamProcess";
import { Mentoring } from "src/models/interfaces/Mentoring";
import { IndividualProgrammingExperience } from "src/models/interfaces/IndividualProgrammingExperience";
import { role } from "src/models/enums/Role";


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
    };
    public mentoring : Mentoring = {
        MentoringExperience: {},
        MentoringOther: [],
    };

    public communityMeasures : CommunityMeasures = {
        CommunityIdentification: {},
        SocialCapital: {},
    };

    public individualProgrammingExperience : IndividualProgrammingExperience = {
        ProgrammingExperienceYears: [],
        ProgrammingExperienceComparison: [],
        ProgrammingAbility: {},
        ProgrammingComfort: {},
    };

    
//#endregion
//#region exampleData
    readonly teams : string[] = [
        'Team1', 'Team2', 'Team3', 'Team4', 'Team5'
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

    getRole(answer: number): number {
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


    insertTeamComposition() : void{
            this.teamComposition.TeamId.push(this.teams[this.getRandomInt(5)]);
            this.teamComposition.TeamSize.push(this.getRandomInt(5));
            this.teamComposition.CodeRepo.push(this.exampleString);
            this.teamComposition.ResourcesURL.push(this.exampleString);
            this.teamComposition.TeamLeader.push(this.getRole(this.getRandomInt(3)));
            this.teamComposition.TeamManager.push(this.getRole(this.getRandomInt(3)));
            this.teamComposition.TeamLeader.push(this.getRole(this.getRandomInt(3)));
    }


    insertMentoring() : void{
            this.mentoring.MentoringExperience['The mentors supported us to scope our project.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors took decisions about the direction of our project.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors provided us with solutions to technical problems we encountered.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors helped us to find our own solutions to technical problems we encountered.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentor were mainly focused on our learning progress.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors were mainly focused on our project progress.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors were part of our team.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['The mentors showed interest in us beyond the project we were working on.'].push(this.getFivePointScala(this.getRandomInt(5)));
            this.mentoring.MentoringExperience['We could reach the mentors when we needed help.'].push(this.getFivePointScala(this.getRandomInt(5)));

            this.mentoring.MentoringOther.push(this.exampleString);
    }

    insertCommunityMeasures() : void{
        this.communityMeasures.CommunityIdentification['I identify with other members of this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.CommunityIdentification['I am like other members of this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.CommunityIdentification['This community is an important reflection of who I am.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.CommunityIdentification['I would like to continue working with this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.CommunityIdentification['I dislike being a member of this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.CommunityIdentification['I would rather belong to another community.'].push(this.getFivePointScala(this.getRandomInt(5)));

        this.communityMeasures.SocialCapital['I feel I am part of this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['I am interested in what goes on in this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['Interacting with other members of this community makes me want to try new things.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['I am willing to spend time to support general activities in this community.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['Through this community I come into contact with new people all the time.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['There are several people in this community that I trust to help me solve my problems.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['I know someone in this community that I can turn to if I urgently need help.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['There is someone in this community that I can turn to for advice about making important decision.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['The other members of this community would be good job references for me.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.communityMeasures.SocialCapital['I do not know people in this community well enough to get them to do anything important.'].push(this.getFivePointScala(this.getRandomInt(5)));
    }

    insertIndividualProgrammingExperience() : void {
        this.individualProgrammingExperience.ProgrammingExperienceYears.push(this.getRandomInt(5));
        this.individualProgrammingExperience.ProgrammingExperienceComparison.push(this.getFivePointScala(this.getRandomInt(5)));
        
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVA.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVASCRIPT.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in PYTHON.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in HTML/HTML5.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in DJANGO/AIRAVATA.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of REQUESTS, JSON and XML.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of JUPYTER NOTEBOOKS.'].push(this.getFivePointScala(this.getRandomInt(5)));

        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVA.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVASCRIPT.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in PYTHON.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in HTML/HTML5.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in DJANGO/AIRAVATA.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use REQUESTS, JSON and XML.'].push(this.getFivePointScala(this.getRandomInt(5)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use JUPYTER NOTEBOOKS.'].push(this.getFivePointScala(this.getRandomInt(5)));


    }





  }