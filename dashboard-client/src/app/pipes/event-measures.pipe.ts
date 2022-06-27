import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { EventMeasures } from "../../models/interfaces/EventMeasures";
import { average } from '../shared/average';
import { standardDeviation } from '../shared/standardDeviation';
import { Session } from "../../models/interfaces/EventMeasures";

@Pipe({
  name: 'eventMeasuresPipe'
})
export class EventMeasuresPipe implements PipeTransform {

  transform(eventMeasures: EventMeasures): any {

    let SatisfactionInput = [
      {
        "name": "(1) Very dissatisfied to (5) Very satisfied",
        "series": [
          {
            "name": "1",
            "value": 0
          },
          {
            "name": "2",
            "value": 0
          },
          {
            "name": "3",
            "value": 0
          },{
            "name": "4",
            "value": 0
          },{
            "name": "5",
            "value": 0
          }
        ]
      },
      {
        "name": "(1) Very displeased to (5) Very pleased",
        "series": [
          {
            "name": "1",
            "value": 0
          },
          {
            "name": "2",
            "value": 0
          },
          {
            "name": "3",
            "value": 0
          },{
            "name": "4",
            "value": 0
          },{
            "name": "5",
            "value": 0
          }
        ]
      },
      {
        "name": "(1) Very frustrated to (5) Very contented",
        "series": [
          {
            "name": "1",
            "value": 0
          },
          {
            "name": "2",
            "value": 0
          },
          {
            "name": "3",
            "value": 0
          },{
            "name": "4",
            "value": 0
          },{
            "name": "5",
            "value": 0
          }
        ]
      },
      {
        "name": "(1) Absolutely terrible to (5) Absolutely delighted",
        "series": [
          {
            "name": "1",
            "value": 0
          },
          {
            "name": "2",
            "value": 0
          },
          {
            "name": "3",
            "value": 0
          },{
            "name": "4",
            "value": 0
          },{
            "name": "5",
            "value": 0
          }
        ]
      }
    ];

    let SessionInput = [
      {
        "name": "Pre-event webinar",
        "series": [
          {
            "name": "enjoyable",
            "value": 0
          },
          {
            "name": "satisfied",
            "value": 0
          },
          {
            "name": "useful",
            "value": 0
          }
        ]
      },
      {
        "name": "Checkpoints",
        "series": [
          {
            "name": "enjoyable",
            "value": 0
          },
          {
            "name": "satisfied",
            "value": 0
          },
          {
            "name": "useful",
            "value": 0
          }
        ]
      },
      {
        "name": "Mentoring sessions",
        "series": [
          {
            "name": "enjoyable",
            "value": 0
          },
          {
            "name": "satisfied",
            "value": 0
          },
          {
            "name": "useful",
            "value": 0
          }
        ]
      }
    ];

    let FutureInput = [
      {
        "name": "Definitely not",
        "value": 0
      },
      {
        "name": "Probably not",
        "value": 0
      },
      {
        "name": "Probably yes",
        "value": 0
      },
      {
        "name": "Definitely yes",
        "value": 0
      },
      {
        "name": "MightOfMight not",
        "value": 0
      }
    ];

    // for SatisfactionInput transform
    for(let entry of eventMeasures.SatisfactionWithHackathon.Satisfaction) {
      SatisfactionInput[0].series[entry].value = SatisfactionInput[0].series[entry].value + 1;
    } //  Satisfaction

    for(let entry of eventMeasures.SatisfactionWithHackathon.Pleasure) {
      SatisfactionInput[1].series[entry].value = SatisfactionInput[1].series[entry].value + 1;
    } // Pleasure

    for(let entry of eventMeasures.SatisfactionWithHackathon.Contended) {
      SatisfactionInput[2].series[entry].value = SatisfactionInput[2].series[entry].value + 1;
    } // Contented

    for(let entry of eventMeasures.SatisfactionWithHackathon.Delighted) {
      SatisfactionInput[3].series[entry].value = SatisfactionInput[3].series[entry].value + 1;
    } // Delighted

    // for future transform
    for(let entry of eventMeasures.FutureParticipationIntentions) {
      FutureInput[entry].value = FutureInput[entry].value + 1;
    }

    // for session transform
    let PreEventHelper = 0
    let CheckPointsHelper = 0
    let MentoringHelper = 0


    for(let entry of eventMeasures.SessionEnjoyment) {
      PreEventHelper += entry.PreEventWebinar
      CheckPointsHelper += entry.Checkpoints
      MentoringHelper += entry.MentoringSessions
    }

    SessionInput[0].series[0].value = PreEventHelper/eventMeasures.SessionEnjoyment.length;
    SessionInput[1].series[0].value = CheckPointsHelper/eventMeasures.SessionEnjoyment.length;
    SessionInput[2].series[0].value = MentoringHelper/eventMeasures.SessionEnjoyment.length;

    PreEventHelper = 0
    CheckPointsHelper = 0
    MentoringHelper = 0

    for(let entry of eventMeasures.SessionSatisfaction) {
      PreEventHelper += entry.PreEventWebinar
      CheckPointsHelper += entry.Checkpoints
      MentoringHelper += entry.MentoringSessions
    }

    SessionInput[0].series[1].value = PreEventHelper/eventMeasures.SessionSatisfaction.length;
    SessionInput[1].series[1].value = CheckPointsHelper/eventMeasures.SessionSatisfaction.length;
    SessionInput[2].series[1].value = MentoringHelper/eventMeasures.SessionSatisfaction.length;

    PreEventHelper = 0
    CheckPointsHelper = 0
    MentoringHelper = 0

    for(let entry of eventMeasures.SessionUsefulness) {
      PreEventHelper += entry.PreEventWebinar
      CheckPointsHelper += entry.Checkpoints
      MentoringHelper += entry.MentoringSessions
    }

    SessionInput[0].series[2].value = PreEventHelper/eventMeasures.SessionUsefulness.length;
    SessionInput[1].series[2].value = CheckPointsHelper/eventMeasures.SessionUsefulness.length;
    SessionInput[2].series[2].value = MentoringHelper/eventMeasures.SessionUsefulness.length;

    let eventMeasuresInput = {
      SatisfactionInput,
      FutureInput,
      SessionInput
    }

    console.log(eventMeasuresInput);

    return eventMeasuresInput;
  }
}
