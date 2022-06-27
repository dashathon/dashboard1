import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { CommunityMeasures } from "../../models/interfaces/CommunityMeasures";
import { average } from '../shared/average';
import { standardDeviation } from '../shared/standardDeviation';

@Pipe({
  name: 'communityMeasuresPipe'
})
export class CommunityMeasuresPipe implements PipeTransform {

  transform(communityMeasures: CommunityMeasures): any {
    let  calculatedInput : {[key: string]: any} = {};
    let  helpAverageList:any[]  = [];

    let CommunityData = [
      {"name": 'I identify with other members of this community.', "value": 0},
      {"name": 'I am like other members of this community.', "value": 0},
      {"name": 'This community is an important reflection of who I am.', "value": 0},
      {"name": 'I would like to continue working with this community.', "value": 0},
      {"name": 'I dislike being a member of this community.', "value": 0},
      {"name": 'I would rather belong to another community.', "value": 0}
    ];

    let SocialData = [
      {"name": ' I feel I am part of this community.', "value": 0},
      {"name": 'I am interested in what goes on in this community.', "value": 0},
      {"name": 'Interacting with other members of this community makes me want to try new things.', "value": 0},
      {"name": 'I am willing to spend time to support general activities in this community.', "value": 0},
      {"name": 'Through this community I come into contact with new people all the time.', "value": 0},
      {"name": 'There are several people in this community that I trust to help me solve my problems.', "value": 0},
      {"name": 'I know someone in this community that I can turn to if I urgently need help.', "value": 0},
      {"name": 'There is someone in this community that I can turn to for advice about making important decision.', "value": 0},
      {"name": 'The other members of this community would be good job references for me.', "value": 0},
      {"name": 'I do not know people in this community well enough to get them to do anything important.', "value": 0}
    ];

    for(let firstSet of Object.entries(communityMeasures)){
      for(const secondSet of Object.entries(firstSet[1])){
        if ((secondSet[1] as []).length !== 0){
          helpAverageList.push(average(secondSet[1]));
        }
      }
      if (helpAverageList.length !== 0) {
        calculatedInput[firstSet[0]] = {
          avg : Math.round((average(helpAverageList) + 1 + Number.EPSILON) * 100) / 100
        };
      } else {
        calculatedInput[firstSet[0]] = null;
      }
      helpAverageList = [];
    }
    return calculatedInput;
  }

}
