import { Pipe, PipeTransform } from '@angular/core';
import { TeamComposition } from 'src/models/interfaces/TeamComposition';
import { role } from '../../models/enums/Role';

@Pipe({
  name: 'teamCompositionPipe'
})
export class TeamCompositionPipe implements PipeTransform {

  transform(teamComposition: TeamComposition): any {
    let calculatedInputs = {
      teamSize:[] as number[],

      TeamLeader: [{"name": 'Yes', "value": 0},
      {"name": 'SomeOneElse', "value": 0},
      {"name": 'Nobody', "value": 0}],

      TeamManager: [{"name": 'Yes', "value": 0},
      {"name": 'SomeOneElse', "value": 0},
      {"name": 'Nobody', "value": 0}],

      SocialLeader: [{"name": 'Yes', "value": 0},
      {"name": 'SomeOneElse', "value": 0},
      {"name": 'Nobody', "value": 0}],

      teamID: [] as string[],
      resourcesURL:[] as string[]
      
      
};
  calculatedInputs.teamSize = teamComposition.TeamSize;
  for(let entry of teamComposition.TeamLeader) {
    calculatedInputs.TeamLeader[entry].value = calculatedInputs.TeamLeader[entry].value + 1;
  }
  for(let entry of teamComposition.TeamManager) {
    calculatedInputs.TeamManager[entry].value = calculatedInputs.TeamManager[entry].value + 1;
  }
  for(let entry of teamComposition.SocialLeader) {
    calculatedInputs.SocialLeader[entry].value = calculatedInputs.SocialLeader[entry].value + 1;
  }
  
  calculatedInputs.teamID = teamComposition.TeamId;
  calculatedInputs.resourcesURL = teamComposition.ResourcesURL
  return calculatedInputs;
}
}
