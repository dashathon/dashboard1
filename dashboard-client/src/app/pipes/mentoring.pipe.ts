import { Pipe, PipeTransform } from '@angular/core';
import { Mentoring } from 'src/models/interfaces/Mentoring';
import { average } from '../shared/average';

@Pipe({
  name: 'mentoringPipe'
})
export class MentoringPipe implements PipeTransform {

  transform(mentoring: Mentoring): any {

    let calculatedInput = {
      improvement: [] as string[],
      percievedSupport: [] as any[]
    }

    //Fill improvement opportunities
    calculatedInput.improvement = mentoring.MentoringOther.filter(text => text !== undefined);

    //Fill percieved Support
    for(let entry of Object.entries(mentoring.MentoringExperience)) {
      if ((entry[1] as []).length > 0) {
        calculatedInput.percievedSupport.push({
          "name": entry[0],
          "value": average(entry[1]) + 1
        });
      }
    }

    return calculatedInput;

    
  }

}
