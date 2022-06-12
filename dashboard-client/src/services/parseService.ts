//#region imports
import { age } from "src/models/enums/Age";
import { fivePointLikertScale } from "src/models/enums/FivePointLikertScale";
import { CommunityMeasures } from "src/models/interfaces/CommunityMeasures";
import { IndividualMeasures } from "src/models/interfaces/IndividualMeasures";
import { TeamComposition } from "src/models/interfaces/TeamComposition";
import { TeamProcess } from "src/models/interfaces/TeamProcess";
import { ProjectMeasures } from "src/models/interfaces/ProjectMeasures";
import { EventMeasures } from "src/models/interfaces/EventMeasures";
import { Session } from "src/models/interfaces/EventMeasures";
import { DemographicsIndividualBackground } from "src/models/interfaces/DemographicsIndividualBackground";
import { gender } from "src/models/enums/Gender";
import { education } from "src/models/enums/Education";
import { minority } from "src/models/enums/Minority";
import { Mentoring } from "src/models/interfaces/Mentoring";
import { IndividualProgrammingExperience } from "src/models/interfaces/IndividualProgrammingExperience";
import { role } from "src/models/enums/Role";
//#endregion 

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
    public teamProcess : TeamProcess = {
        SatisfactionWithProcess:{
            Effiency: [],
            Coordination: [],
            Fairness: [],
            Understanding: [],
        },
        GoalClarty:{},
        Voice:{},
    }
    public projectMeasures : ProjectMeasures = {
        SatisfactionWithOutcome: {},
        PerceivedUsefulness: {},
        ContinuationIntentions: {},
        BehavioralControl: {},
    }
    public communityMeasures : CommunityMeasures = {
        CommunityIdentification:{},
        SocialCapital: {},
    }
    public eventMeasures : EventMeasures = {
        SatisfactionWithHackathon:{
            Satisfaction: [],
            Pleasure: [],
            Contended: [],
            Delighted: [],
        },
        FutureParticipationIntentions : [],
        RecommendationLikelyness: [],
        SessionSatisfaction: [],
        SessionUsefulness : [],
        SessionEnjoyment : [],
        GoodEvent: [],
    }
    public demographicsIndividualBackground : DemographicsIndividualBackground = {
        Age: [],
        Gender: [],
        Education: [],
        Minority: [],
    };
    public mentoring : Mentoring = {
        MentoringExperience: {},
        MentoringOther: [],
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
        //individualMeasures
        this.individualMeasures.Motivation['Making something cool / Working on an interesting project idea'] = [];
        this.individualMeasures.Motivation['Learning new tools or skills (Clary, understanding)'] = [];
        this.individualMeasures.Motivation['[HACKATHON_THEME]'] = [];
        this.individualMeasures.Motivation['Meeting new people'] = [];
        this.individualMeasures.Motivation['Seeing what others are working on'] = [];
        this.individualMeasures.Motivation['Sharing my experience and expertise'] = [];
        this.individualMeasures.Motivation['Joining friends that participate (Clary, social)'] = [];
        this.individualMeasures.Motivation['Dedicated time to get work done'] = [];
        this.individualMeasures.Motivation['Wind a prize'] = [];
        this.individualMeasures.Motivation['Having fun'] = [];
        //teamProcess

        this.teamProcess.GoalClarty['I was uncertain of my duties and responsibilities in this team.'] = [];
        this.teamProcess.GoalClarty['I was unclear about the goals and objectives for my work in this team.'] = [];
        this.teamProcess.GoalClarty['I was unsure how my work relates to the overall objectives of my team.'] = [];

        this.teamProcess.Voice['Everyone had a chance to express his/her opinion.'] = [];
        this.teamProcess.Voice['The team members responded to the comments made by others.'] = [];
        this.teamProcess.Voice['The team members participated very actively during the project.'] = [];
        this.teamProcess.Voice['Overall, the participation of each member in the team was effective.'] = [];

        //projectMeasures
        this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the work completed in my project.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the quality of my team\'s output.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['My ideal outcome coming into my project achieved.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['My expectations towards my team were met.'] = [];

        this.projectMeasures.PerceivedUsefulness['My project improves my performance during my everyday work'] = [];
        this.projectMeasures.PerceivedUsefulness['My project improves my productivity during my everyday work.'] = [];
        this.projectMeasures.PerceivedUsefulness['My project improves my effectiveness during my everyday work.'] = [];
        this.projectMeasures.PerceivedUsefulness['Overall, my project will be useful during my everyday work.'] = [];

        this.projectMeasures.ContinuationIntentions['I intend to continue working on my hackathon project rather than not continue working on it.'] = [];
        this.projectMeasures.ContinuationIntentions['My intentions are to continue working on my hackathon project rather than any other project.'] = [];
        this.projectMeasures.ContinuationIntentions['If I could, I would like to continue working on my hackathon project as much as possible.'] = [];

        this.projectMeasures.BehavioralControl['I would be able to continue working on my hackathon project.'] = [];
        this.projectMeasures.BehavioralControl['Continuing to work on my hackathon project is entirely under my control.'] = [];
        this.projectMeasures.BehavioralControl['I have the resources, knowledge, and ability to continue working on my project after the hackathon.'] = [];

        //mentoring

        this.mentoring.MentoringExperience['The mentors supported us to scope our project.'] = [];
        this.mentoring.MentoringExperience['The mentors took decisions about the direction of our project.'] = [];
        this.mentoring.MentoringExperience['The mentors provided us with solutions to technical problems we encountered.'] = [];
        this.mentoring.MentoringExperience['The mentors helped us to find our own solutions to technical problems we encountered.'] = [];
        this.mentoring.MentoringExperience['The mentor were mainly focused on our learning progress.'] = [];
        this.mentoring.MentoringExperience['The mentors were mainly focused on our project progress.'] = [];
        this.mentoring.MentoringExperience['The mentors were part of our team.'] = [];
        this.mentoring.MentoringExperience['The mentors showed interest in us beyond the project we were working on.'] = [];
        this.mentoring.MentoringExperience['We could reach the mentors when we needed help.'] = [];

        //communityMeasures


        this.communityMeasures.CommunityIdentification['I identify with other members of this community.'] = [];
        this.communityMeasures.CommunityIdentification['I am like other members of this community.'] = [];
        this.communityMeasures.CommunityIdentification['This community is an important reflection of who I am.'] = [];
        this.communityMeasures.CommunityIdentification['I would like to continue working with this community.'] = [];
        this.communityMeasures.CommunityIdentification['I dislike being a member of this community.'] = [];
        this.communityMeasures.CommunityIdentification['I would rather belong to another community.'] = [];

        this.communityMeasures.SocialCapital['I feel I am part of this community.'] = [];
        this.communityMeasures.SocialCapital['I am interested in what goes on in this community.'] = [];
        this.communityMeasures.SocialCapital['Interacting with other members of this community makes me want to try new things.'] = [];
        this.communityMeasures.SocialCapital['I am willing to spend time to support general activities in this community.'] = [];
        this.communityMeasures.SocialCapital['Through this community I come into contact with new people all the time.'] = [];
        this.communityMeasures.SocialCapital['There are several people in this community that I trust to help me solve my problems.'] = [];
        this.communityMeasures.SocialCapital['I know someone in this community that I can turn to if I urgently need help.'] = [];
        this.communityMeasures.SocialCapital['There is someone in this community that I can turn to for advice about making important decision.'] = [];
        this.communityMeasures.SocialCapital['The other members of this community would be good job references for me.'] = [];
        this.communityMeasures.SocialCapital['I do not know people in this community well enough to get them to do anything important.'] = [];

        //individualProgrammingExperience

        this.individualProgrammingExperience.ProgrammingExperienceYears = [];
        this.individualProgrammingExperience.ProgrammingExperienceComparison = [];

        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVA.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVASCRIPT.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in PYTHON.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in HTML/HTML5.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in DJANGO/AIRAVATA.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of REQUESTS, JSON and XML.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of JUPYTER NOTEBOOKS.'] = [];

        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVA.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVASCRIPT.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in PYTHON.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in HTML/HTML5.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in DJANGO/AIRAVATA.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use REQUESTS, JSON and XML.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use JUPYTER NOTEBOOKS.'] = [];
     }

     doSth(): void {
        this.insertIndividualMeasures();
        this.insertTeamProcess();
        this.insertProjectMeasures();
        this.insertEventMeasures();
        this.insertTeamComposition();
        this.insertMentoring();
        this.insertCommunityMeasures();
        this.insertIndividualProgrammingExperience();
        this.insertDemographicsIndividualBackground();
     }

     getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }
      
    getAge(pAge: number): age {
        switch(pAge){

       
        case 0: { 
            return age.Range1; 
            break; 
         } 
         case 1: { 
            return age.Range2; 
            break; 
         }
         case 2: { 
             return age.Range3; 
             break; 
          }
          case 3: { 
             return age.Range4; 
             break; 
          }
          case 4: { 
            return age.Range5; 
            break; 
         } 
         case 5: { 
            return age.Range6; 
            break; 
         }
         case 6: { 
             return age.Range7; 
             break; 
          }
          case 7: { 
             return age.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error('number out of range');
        } 
        }
    }
    getEducation(pEdudation: number): education {
        switch(pEdudation){

       
        case 0: { 
            return education.HighSchool; 
            break; 
         } 
         case 1: { 
            return education.SomeCollege; 
            break; 
         }
         case 2: { 
             return education.Associate; 
             break; 
          }
          case 3: { 
             return education.Bachelor; 
             break; 
          }
          case 4: { 
            return education.Professional; 
            break; 
         } 
         case 5: { 
            return education.Master; 
            break; 
         }
         case 6: { 
             return education.Doctorate; 
             break; 
          }
          case 7: { 
             return education.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error('number out of range');
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
            } 
        }
    }

    getGender(pGender: number): number {
        switch(pGender){
       
        case 0: { 
            return gender.Female; 
            break; 
         } 
         case 1: { 
            return gender.Male; 
            break; 
         }
         case 2: { 
             return gender.NonBinary; 
             break; 
          }
          case 3: { 
             return gender.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error('number out of range');
        } 
        }
    }

    getMinority(answer: number): number {
        switch(answer){
        case 0: { 
            return minority.Yes; 
            break; 
         } 
         case 1: { 
            return minority.No; 
            break; 
         }
         case 2: { 
             return minority.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error('number out of range');
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

   insertTeamProcess() : void{
    this.teamProcess.SatisfactionWithProcess.Effiency.push(this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.SatisfactionWithProcess.Coordination.push(this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.SatisfactionWithProcess.Fairness.push(this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.SatisfactionWithProcess.Understanding.push(this.getFivePointScala(this.getRandomInt(5)));

    this.teamProcess.GoalClarty['I was uncertain of my duties and responsibilities in this team.'].push( this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.GoalClarty['I was unclear about the goals and objectives for my work in this team.'].push( this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.GoalClarty['I was unsure how my work relates to the overall objectives of my team.'].push( this.getFivePointScala(this.getRandomInt(5)));

    this.teamProcess.Voice['Everyone had a chance to express his/her opinion.'].push( this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.Voice['The team members responded to the comments made by others.'].push( this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.Voice['The team members participated very actively during the project.'].push( this.getFivePointScala(this.getRandomInt(5)));
    this.teamProcess.Voice['Overall, the participation of each member in the team was effective.'].push( this.getFivePointScala(this.getRandomInt(5)));

   }
   
   insertProjectMeasures() : void {
       this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the work completed in my project.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the quality of my team\'s output.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.SatisfactionWithOutcome['My ideal outcome coming into my project achieved.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.SatisfactionWithOutcome['My expectations towards my team were met.'].push( this.getFivePointScala(this.getRandomInt(5)));

       this.projectMeasures.PerceivedUsefulness['My project improves my performance during my everyday work'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.PerceivedUsefulness['My project improves my productivity during my everyday work.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.PerceivedUsefulness['My project improves my effectiveness during my everyday work.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.PerceivedUsefulness['Overall, my project will be useful during my everyday work.'].push( this.getFivePointScala(this.getRandomInt(5)));

       this.projectMeasures.ContinuationIntentions['I intend to continue working on my hackathon project rather than not continue working on it.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.ContinuationIntentions['My intentions are to continue working on my hackathon project rather than any other project.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.ContinuationIntentions['If I could, I would like to continue working on my hackathon project as much as possible.'].push( this.getFivePointScala(this.getRandomInt(5)));

       this.projectMeasures.BehavioralControl['I would be able to continue working on my hackathon project.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.BehavioralControl['Continuing to work on my hackathon project is entirely under my control.'].push( this.getFivePointScala(this.getRandomInt(5)));
       this.projectMeasures.BehavioralControl['I have the resources, knowledge, and ability to continue working on my project after the hackathon.'].push( this.getFivePointScala(this.getRandomInt(5)));
   }


   insertEventMeasures() : void {
    this.eventMeasures.SatisfactionWithHackathon.Satisfaction.push( this.getFivePointScala(this.getRandomInt(5)));
    this.eventMeasures.SatisfactionWithHackathon.Pleasure.push( this.getFivePointScala(this.getRandomInt(5)));
    this.eventMeasures.SatisfactionWithHackathon.Contended.push( this.getFivePointScala(this.getRandomInt(5)));
    this.eventMeasures.SatisfactionWithHackathon.Delighted.push( this.getFivePointScala(this.getRandomInt(5)));

    this.eventMeasures.FutureParticipationIntentions.push( this.getFivePointScala(this.getRandomInt(5)));
    this.eventMeasures.RecommendationLikelyness.push(this.getRandomInt(10));


    const sessionSatisfaction : Session = {
        PreEventWebinar : this.getFivePointScala(this.getRandomInt(5)),
        Checkpoints : this.getFivePointScala(this.getRandomInt(5)),
        MentoringSessions : this.getFivePointScala(this.getRandomInt(5)),
        }

    this.eventMeasures.SessionSatisfaction.push(sessionSatisfaction);

    const sessionUsefulness : Session = {
        PreEventWebinar : this.getFivePointScala(this.getRandomInt(5)),
        Checkpoints : this.getFivePointScala(this.getRandomInt(5)),
        MentoringSessions : this.getFivePointScala(this.getRandomInt(5)),
        }
        this.eventMeasures.SessionUsefulness.push(sessionUsefulness);

    const sessionEnjoyment : Session = {
        PreEventWebinar : this.getFivePointScala(this.getRandomInt(5)),
        Checkpoints : this.getFivePointScala(this.getRandomInt(5)),
        MentoringSessions : this.getFivePointScala(this.getRandomInt(5)),
    }
    this.eventMeasures.SessionEnjoyment.push(sessionEnjoyment);

    this.eventMeasures.GoodEvent.push(this.exampleString);
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

   insertDemographicsIndividualBackground() : void {
    this.demographicsIndividualBackground.Age.push(this.getAge(this.getRandomInt(7)));
    this.demographicsIndividualBackground.Gender.push(this.getGender(this.getRandomInt(4)));
    this.demographicsIndividualBackground.Education.push(this.getEducation(this.getRandomInt(8)));
    this.demographicsIndividualBackground.Minority.push(this.getMinority(this.getRandomInt(3)));
   }

}