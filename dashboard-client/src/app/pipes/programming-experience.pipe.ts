import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { IndividualProgrammingExperience } from 'src/models/interfaces/IndividualProgrammingExperience';
import { average } from '../shared/average';
import { standardDeviation } from '../shared/standardDeviation';

@Pipe({
  name: 'programmingExperiencePipe'
})
export class ProgrammingExperiencePipe implements PipeTransform {

  transform(programmingExperience: IndividualProgrammingExperience): any {

    let languageVariable = [
      { title: 'Java', value: 0, sd: 0 },
      { title: 'Javascript', value: 0, sd: 0 },
      { title: 'Python', value: 0, sd: 0 },
      { title: 'HTML/HTML5', value: 0, sd: 0 },
      { title: 'Django/Airvata', value: 0, sd: 0 },
      { title: 'Requests, Json & XML', value: 0, sd: 0 },
      { title: 'Jupyter Notebooks', value: 0, sd: 0 },
    ];

    let calculatedInputs = {
      years: 0,
      comparedExperience: [{"name": 'Very inexperienced', "value": 0},
      {"name": 'Inexperienced', "value": 0},
      {"name": 'Comparable', "value": 0},
      {"name": 'Experienced', "value": 0},
      {"name": 'Very experienced', "value": 0}],
      ability: JSON.parse(JSON.stringify(languageVariable)),
      comfort: JSON.parse(JSON.stringify(languageVariable))
    };

    // Fill Ability and Comfort
    this.averageAndSdListCalculation(programmingExperience.ProgrammingAbility, calculatedInputs.ability);
    this.averageAndSdListCalculation(programmingExperience.ProgrammingComfort, calculatedInputs.comfort);

    //Fill years of experience
    calculatedInputs.years = Math.floor(average(programmingExperience.ProgrammingExperienceYears));

    //Fill compared experience
    for (let entry of programmingExperience.ProgrammingExperienceComparison) {
      calculatedInputs.comparedExperience[entry].value = calculatedInputs.comparedExperience[entry].value + 1;
    }

    console.log(calculatedInputs);

    return calculatedInputs;
  }

  averageAndSdListCalculation(source: any, target: any): void {
    let  helpAverageList:any[]  = [];
    let  helpSdList: any[] = [];

    for(let firstSet of Object.entries(source)){
      //@ts-ignore
      for(const value of firstSet[1]){
        helpAverageList.push(value);
        helpSdList.push(value);
      }
      let indexHelper = 0;
      if (firstSet[0].includes('JAVASCRIPT')) {
        indexHelper = 1;
      } else if (firstSet[0].includes('JAVA')) {
        indexHelper = 0;
      } else if (firstSet[0].includes('PYTHON')) {
        indexHelper = 2;
      } else if (firstSet[0].includes('HTML')) {
        indexHelper = 3;
      } else if (firstSet[0].includes('DJANGO')) {
        indexHelper = 4;
      } else if (firstSet[0].includes('REQUESTS')) {
        indexHelper = 5;
      } else if (firstSet[0].includes('JUPYTER')) {
        indexHelper = 6;
      }
      target[indexHelper].value = Math.round((average(helpAverageList) + Number.EPSILON) * 100) / 100;
      target[indexHelper].sd = Math.round((standardDeviation(helpSdList) + Number.EPSILON) * 100) / 100
      helpAverageList = [];
      helpSdList = [];
    }
    target.sort((a:any, b:any) => (a.value > b.value ? -1 : 1));
  }

}
