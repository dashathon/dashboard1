import { Pipe, PipeTransform } from '@angular/core';
import { IndividualMeasures } from 'src/models/interfaces/IndividualMeasures';
import { average } from '../shared/average';

@Pipe({
  name: 'individualMeasuresPipe'
})
export class IndividualMeasuresPipe implements PipeTransform {

  transform(individualMeasures: IndividualMeasures): any {
    
    let calculatedInputs = {
      participations: 0,
      otherMotivations: [] as any[],
      motivationDistribution: [] as any[]
    }
    
    //Fill participations
    calculatedInputs.participations = Math.round(average(individualMeasures.EventParticipation));

    //Fill motivation distribution
    for (let entry of Object.entries(individualMeasures.Motivation)) {
      calculatedInputs.motivationDistribution.push(
      {
        "name": entry[0],
        "value": average(entry[1]) + 1
      });
    }

    //Fill other motivations
    this.count(individualMeasures.MotivationOther, calculatedInputs.otherMotivations);

    return calculatedInputs;
  }

  count(array: string[], target: any) {
    array.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] != current) {
        if (cnt > 0) {
          target.push({
            "text": current,
            "amount": cnt 
          });
        }
        current = array[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      target.push({
        "text": current,
        "amount": cnt 
      });
    }
  }

}
