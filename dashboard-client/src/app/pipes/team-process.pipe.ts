import { Pipe, PipeTransform } from '@angular/core';
import { TeamProcess } from 'src/models/interfaces/TeamProcess';
import { average } from '../shared/average';
@Pipe({
  name: 'teamProcessPipe'
})
export class TeamProcessPipe implements PipeTransform {

  transform(teamProcess: TeamProcess): any {
    let SatisfactionWithProcess = {
      Efficiency: [{"name": '+positive', "value": 0},
      {"name": '-negative', "value": 0}],
      Coordination: [{"name": '+positive', "value": 0},
      {"name": '-negative', "value": 0}],
      Fairness: [{"name": '+positive', "value": 0},
      {"name": '-negative', "value": 0}],
      Clarity: [{"name": '+positive', "value": 0},
      {"name": '-negative', "value": 0}],

      
  };

  for(let entry of teamProcess.SatisfactionWithProcess.Efficiency) {
    SatisfactionWithProcess.Efficiency[entry].value = SatisfactionWithProcess.Efficiency[entry].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Coordination) {
    SatisfactionWithProcess.Coordination[entry].value = SatisfactionWithProcess.Coordination[entry].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Fairness) {
    SatisfactionWithProcess.Fairness[entry].value = SatisfactionWithProcess.Fairness[entry].value + 1;
  }
  for(let entry of teamProcess.SatisfactionWithProcess.Clarity) {
    SatisfactionWithProcess.Clarity[entry].value = SatisfactionWithProcess.Clarity[entry].value + 1;
  }
  
  let calculatedInput = {
    
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

}


