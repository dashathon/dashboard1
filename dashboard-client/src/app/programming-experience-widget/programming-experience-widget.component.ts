import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-experience-widget',
  templateUrl: './programming-experience-widget.component.html',
  styleUrls: ['./programming-experience-widget.component.scss']
})
export class ProgrammingExperienceWidgetComponent implements OnInit {

  answerList = ["More Fun", "Less Fun at Home", "Jobs", "Having a big Ding Dong"];
  barChartData = [
    {"name": 'Java', "value": 3.3},
    {"name": 'Javascript', "value": 2.4},
    {"name": 'Python', "value": 1.2},
    {"name": 'HTML/HTML5', "value": 2},
    {"name": 'Django/Airavata', "value": 1},
    {"name": 'Requests, Json, XML', "value": 4},
    {"name": 'Jupyter Notebooks', "value": 3.5}
  ]

  progExpData = [
    {"name": 'Very inexperienced', "value": 8},
    {"name": 'Inexperienced', "value": 15},
    {"name": 'Comparable', "value": 22},
    {"name": 'Experienced', "value": 9},
    {"name": 'Very experienced', "value": 5}
  ]

  exampleData = [
    {
      title: 'Java',
      value: '2.5',
      sd: '1.2'
    },
    {
      title: 'Javascript',
      value: '2.8',
      sd: '1.0'
    },
    {
      title: 'Python',
      value: '2.5',
      sd: '1.2'
    },
    {
      title: 'HTML/HTML5',
      value: '3.7',
      sd: '0.4'
    },
    {
      title: 'Django/Airvata',
      value: '0.8',
      sd: '0.6'
    },
    {
      title: 'Requests, Json & XML',
      value: '3.2',
      sd: '1.8'
    },
    {
      title: 'Jupyter Notebooks',
      value: '3.3',
      sd: '1.1'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
