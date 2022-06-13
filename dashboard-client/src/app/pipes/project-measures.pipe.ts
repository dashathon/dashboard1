import { Pipe, PipeTransform } from '@angular/core';
import { ControlClassService } from '@clr/angular/forms/common/providers/control-class.service';
import { ProjectMeasures } from 'src/models/interfaces/ProjectMeasures';

@Pipe({
  name: 'projectMeasuresPipe'
})
export class ProjectMeasuresPipe implements PipeTransform {

  average(list : any) : number{
    let avg
    const sum = list.reduce((a : number, b : number) => a + b, 0);
    avg = (sum / list.length) || 0;
    return avg
  }

  transform(projectMeasures: ProjectMeasures, ...args: unknown[]): any {
    let  calculatedProjectMeasures : {[k: string]: any} = {};
    let  helpAverageList  = [];

    for(let key in projectMeasures){
      let keyHelp = key;
      for(let key in projectMeasures.SatisfactionWithOutcome){ //todo: use key instead of SatisfactionWithOutcome
        helpAverageList.push(this.average(projectMeasures.SatisfactionWithOutcome[key]))
      }
      
      calculatedProjectMeasures[keyHelp] = {avg : this.average(helpAverageList)}; //,standartDev..
  }
/*
  Object.keys(projectMeasuresPipe)(element => {
    
  });
*/
  return calculatedProjectMeasures;


  }


}
