import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation-widget',
  templateUrl: './motivation-widget.component.html',
  styleUrls: ['./motivation-widget.component.scss']
})
export class MotivationWidgetComponent implements OnInit {

  answerList = ["More Fun", "Less Fun at Home", "Jobs", "Having a big Ding Dong"];
  barChartData = [
    {"name": 'Having Fun', "value": 3.3},
    {"name": 'Making something cool', "value": 2.4},
    {"name": 'Learning new skills', "value": 1.2},
    {"name": 'Theme', "value": 2},
    {"name": 'Meeting new People', "value": 1},
    {"name": 'Seing what others are working on', "value": 4},
    {"name": 'Sharing my experience and expertise', "value": 3.5},
    {"name": 'Joining friends that participate', "value": 2.4},
    {"name": 'Dedicated time to get work done', "value": 1.7},
    {"name": 'Win a prize', "value": 0.2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
