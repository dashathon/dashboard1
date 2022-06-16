import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-team-composition',
  templateUrl: './team-composition.component.html',
  styleUrls: ['./team-composition.component.scss']
})
export class TeamCompositionComponent implements OnInit {
  
  barChartData =[
    {"name": "Team Leader",
    "series": [
       {"name": "exist","value": 75,"extra": { "code": "de"}},
       {"name": "not exist","value": 15,"extra": {"code": "de"}}, 
       {"name": "uncertain","value": 10,"extra": {"code": "de"}}, 
      ]
   },
   {"name": "Team Manager",
    "series": [
       {"name": "exist","value": 84,"extra": { "code": "de"}},
       {"name": "not exist","value": 6,"extra": {"code": "de"}},
       {"name": "uncertain","value": 10,"extra": {"code": "de"}},  ]
   },
   {"name": "Social Leader",
   "series": [
      {"name": "exist","value": 30,"extra": { "code": "de"}},
      {"name": "not exist","value": 55,"extra": {"code": "de"}}, 
      {"name": "uncertain","value": 15,"extra": {"code": "de"}}, ]
  },
  {"name": "ResourcesURL",
  "series": [
     {"name": "exist","value": 82,"extra": { "code": "de"}},
     {"name": "not exist","value": 2,"extra": {"code": "de"}}, 
     {"name": "uncertain","value": 16,"extra": {"code": "de"}}, ]
 },
  ]
  pieChartData =[
    {name: 'Know well:0%-25%', value: 3},
    {name: 'Know well:26%-50%', value: 10},
    {name: 'Know well:51%-75%', value: 5},
    {name: 'Know well:76%-100%', value: 2},
]
right=LegendPosition.Below;

  constructor() { }

  ngOnInit(): void {
  }

}
