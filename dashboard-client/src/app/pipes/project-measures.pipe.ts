import { Pipe, PipeTransform } from '@angular/core';
import { EventMeasures } from 'src/models/interfaces/EventMeasures';
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

  transform(multipleLikertQuestions: ProjectMeasures | EventMeasures): any {
    let  calculatedInput : {[k: string]: any} = {};
    let  helpAverageList:any[]  = [];

    for(let firstSet of Object.entries(multipleLikertQuestions)){
      for(const secondSet of Object.entries(firstSet[1])){ //todo: use key instead of SatisfactionWithOutcome
        helpAverageList.push(this.average(secondSet[1]))
      }
      calculatedInput[firstSet[0]] = {avg : Math.round((this.average(helpAverageList) + Number.EPSILON) * 100) / 100}; //,standartDev..
      helpAverageList = [];
    }

  return calculatedInput;
  }


}
