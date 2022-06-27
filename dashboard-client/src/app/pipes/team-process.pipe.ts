import { Pipe, PipeTransform } from '@angular/core';
import { fivePointLikertScale } from 'src/models/enums/FivePointLikertScale';
import { TeamProcess } from 'src/models/interfaces/TeamProcess';
import { average } from '../shared/average';
@Pipe({
  name: 'teamProcessPipe'
})
export class TeamProcessPipe implements PipeTransform {

  transform(teamProcess: TeamProcess): any {
    let SatisfactionWithProcess = [
      {
        "name": "Efficiency",
        "series": [{"name": 'positive', "value": 0},
        {"name": 'uncertain', "value": 0},
        {"name": 'negative', "value": 0}]
      },
      {
        "name": "Coordination",
        "series": [{"name": 'positive', "value": 0},
        {"name": 'uncertain', "value": 0},
        {"name": 'negative', "value": 0}]
      },
      {
        "name": "Fairness",
        "series": [{"name": 'positive', "value": 0},
        {"name": 'uncertain', "value": 0},
        {"name": 'negative', "value": 0}]
      },
      {
        "name": "Clarity",
        "series": [{"name": 'positive', "value": 0},
        {"name": 'uncertain', "value": 0},
        {"name": 'negative', "value": 0}]
      },
    ];

  for(let entry of teamProcess.SatisfactionWithProcess.Effiency) {
    SatisfactionWithProcess[0].series[this.parseLikertData(entry)].value = SatisfactionWithProcess[0].series[this.parseLikertData(entry)].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Coordination) {
    SatisfactionWithProcess[1].series[this.parseLikertData(entry)].value = SatisfactionWithProcess[1].series[this.parseLikertData(entry)].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Fairness) {
    SatisfactionWithProcess[2].series[this.parseLikertData(entry)].value = SatisfactionWithProcess[2].series[this.parseLikertData(entry)].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Understanding) {
    SatisfactionWithProcess[3].series[this.parseLikertData(entry)].value = SatisfactionWithProcess[3].series[this.parseLikertData(entry)].value + 1;
  }
  
  let calculatedInput = {
    columnChartData: SatisfactionWithProcess,
    voiceChartData: [] as any[]
  }

  //Fill percieved Support
  for(let entry of Object.entries(teamProcess.Voice)) {
    if ((entry[1] as []).length > 0) {
      calculatedInput.voiceChartData.push({
        "name": entry[0],
        "value": average(entry[1]) + 1
      });
    }
  }

  return calculatedInput;

  }

  parseLikertData(likertScore: number): number {
    switch(likertScore) {
      case 1:
        return 0;
        break;
      case 2:
        return 1;
        break;
      case 3:
        return 2;
        break;
      case 4:
        return 2;
      default:
        return 0;
        break;
    }
  }

}


