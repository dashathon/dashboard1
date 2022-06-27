import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { EventMeasures } from "../../models/interfaces/EventMeasures";
import { average } from '../shared/average';
import { standardDeviation } from '../shared/standardDeviation';

@Pipe({
  name: 'eventMeasuresFartherPipe'
})
export class EventMeasuresFartherPipe implements PipeTransform {

  transform(eventFartherMeasures: EventMeasures): any {

    let eventFartherInput = {
      RecommendationInput: average(eventFartherMeasures.RecommendationLikelyness),
      goodInput: [] as any[],
      improveInput: [] as any[],
      openInput: [] as any[]
    };

    this.count(eventFartherMeasures.GoodEvent, eventFartherInput.goodInput);
    this.count(eventFartherMeasures.ImproveEvent, eventFartherInput.improveInput);
    this.count(eventFartherMeasures.OpenSharing, eventFartherInput.openInput);

    console.log(eventFartherInput);

    return eventFartherInput;
  };

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
