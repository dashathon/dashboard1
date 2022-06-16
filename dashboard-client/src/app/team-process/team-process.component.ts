import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-process',
  templateUrl: './team-process.component.html',
  styleUrls: ['./team-process.component.scss']
})
export class TeamProcessComponent implements OnInit {
 
  
  
  columnChartData =[
    {"name": "Efficiency",
     "series": [
        {"name": "+positive","value": 10,"extra": { "code": "us"}},
        {"name": "-negative","value": 5,"extra": {"code": "uk"}}, ]
    },
    {"name": "Cooperation",
     "series": [
        {"name": "+positive","value": 12,"extra": { "code": "us"}},
        {"name": "-negative","value": 3,"extra": {"code": "uk"}}, ]
    },
    {"name": "Fairness",
    "series": [
       {"name": "+positive","value": 9,"extra": { "code": "us"}},
       {"name": "-negative","value": 6,"extra": {"code": "uk"}}, ]
   },
   {"name": "Clarity",
   "series": [
      {"name": "+positive","value": 11,"extra": { "code": "us"}},
      {"name": "-negative","value": 4,"extra": {"code": "uk"}}, ]
  },
  ] 
  voiceChartData=[
    {
      "name": "Everyone had a chance to express his/her opinion.",
      "series": [
        {"name": "strongly agree","value": 18,"extra": {"code": "de"}},
        {"name": "Somewhat agree","value": 6,"extra": {"code": "de"}},
        {"name": "Neither agree nor disagree","value": 1,"extra": {"code": "de"}},
        {"name": "Somewhat disagree","value": 4,"extra": {"code": "de"}},
        {"name": "strongly disagree","value": 1,"extra": {"code": "de"}}
      ]},
    {
      "name": "The team members responded to the comments made by others.",
      "series": [
        {"name": "strongly agree","value": 7,"extra": {"code": "us"}},
        {"name": "Somewhat agree","value": 10,"extra": {"code": "us"}},
        {"name": "Neither agree nor disagree","value": 3,"extra": {"code": "us"}},
        {"name": "Somewhat disagree","value": 6,"extra": {"code": "us"}},
        {"name": "strongly disagree","value": 4,"extra": {"code": "us"}}
      ]},
    {
      "name": "The team members participated very actively during the project.",
      "series": [
        {"name": "strongly agree","value": 15,"extra": {"code": "fr"}},
        {"name": "Somewhat agree","value": 8,"extra": {"code": "fr"}},
        {"name": "Neither agree nor disagree","value": 0,"extra": {"code": "fr"}},
        {"name": "Somewhat disagree","value": 5,"extra": {"code": "fr"}},
        {"name": "strongly disagree","value": 2,"extra": {"code": "fr"}}
        
      ]},
    {
      "name": "Overall, the participation of each member in the team was effective.",
      "series": [
        {"name": "strongly agree","value": 10,"extra": {"code": "uk"}},
        {"name": "Somewhat agree","value": 13,"extra": {"code": "uk"}},
        {"name": "Neither agree nor disagree","value": 1,"extra": {"code": "uk"}},
        {"name": "Somewhat disagree","value": 4,"extra": {"code": "uk"}},
        {"name": "strongly disagree","value": 2,"extra": {"code": "uk"}}
       ]},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
