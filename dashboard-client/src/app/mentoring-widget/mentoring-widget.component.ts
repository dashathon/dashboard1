import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoring-widget',
  templateUrl: './mentoring-widget.component.html',
  styleUrls: ['./mentoring-widget.component.scss']
})
export class MentoringWidgetComponent implements OnInit {

  answerList = ['Better feedback', 'The mentors could have been more productive in regards of helping with coding.', 'Nothing to improve here, just awesome stuff happened!']

  barChartData = [
    {"name": 'The mentors supported us to scope our project.', "value": 3.3},
    {"name": 'The mentors took decisions about the direction of our project.', "value": 2.4},
    {"name": 'The mentors provided us with solutions to technical problems we encountered.', "value": 1.2},
    {"name": 'The mentors helped us to find our own solutions to technical problems we encountered.', "value": 2},
    {"name": 'The mentor were mainly focused on our learning progress. ', "value": 1},
    {"name": 'The mentors were mainly focused on our project progress. ', "value": 4},
    {"name": 'The mentors were part of our team.', "value": 3.5},
    {"name": 'The mentors showed interest in us beyond the project we were working on. ', "value": 2.4},
    {"name": 'We could reach the mentors when we needed help.', "value": 1.7}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
