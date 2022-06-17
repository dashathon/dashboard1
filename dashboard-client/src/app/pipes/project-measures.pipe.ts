import { Pipe, PipeTransform } from '@angular/core';
import { ProjectMeasures } from 'src/models/interfaces/ProjectMeasures';
import { average } from 'src/app/shared/average';
import { standardDeviation } from '../shared/standardDeviation';

@Pipe({
  name: 'projectMeasuresPipe'
})
export class ProjectMeasuresPipe implements PipeTransform {

  transform(multipleLikertQuestions: ProjectMeasures): any {
    let  calculatedInput : {[k: string]: any} = {};
    let  helpAverageList:any[]  = [];
    let  helpSdList: any[] = [];

    for(let firstSet of Object.entries(multipleLikertQuestions)){
      for(const secondSet of Object.entries(firstSet[1])){
        if ((secondSet[1] as []).length !== 0){
          helpAverageList.push(average(secondSet[1]));
          helpSdList.push(standardDeviation(secondSet[1]));
        }
      }
      if (helpAverageList.length !== 0) {
        calculatedInput[firstSet[0]] = {
          avg : Math.round((average(helpAverageList) + 1 + Number.EPSILON) * 100) / 100,
          sd: Math.round((average(helpSdList) + Number.EPSILON) * 100) / 100
        };
      } else {
        calculatedInput[firstSet[0]] = null;
      }
      helpAverageList = [];
      helpSdList = [];
    }

  return calculatedInput;
  }


}
