import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-demographics-widget',
  templateUrl: './demographics-widget.component.html',
  styleUrls: ['./demographics-widget.component.scss']
})
export class DemographicsWidgetComponent implements OnInit {

  minorityData = [
    {name: 'yes', value: 40},
    {name: 'no', value: 90},
    {name: 'Prefer not to say', value: 10}
  ]

  below = LegendPosition.Below;

  barChartData = [
    {"name": '18-24', "value": 35},
    {"name": '25-34', "value": 30},
    {"name": '35-44', "value": 4},
    {"name": '45-54', "value": 2},
    {"name": '55-64', "value": 0},
    {"name": '65-74', "value": 0},
    {"name": '75+', "value": 1},
    {"name": 'N/A', "value": 13}
  ]

  exampleData = [
    {title: 'High school diploma or GED', percentage: '25'},
    {title: 'Some college', percentage: '10'},
    {title: 'Associate and/or bachelor\'s degree', percentage: '13'},
    {title: 'Bachelor\s degree', percentage: '23'},
    {title: 'Professional degree', percentage: '10'},
    {title: 'Master\s degree', percentage: '4'},
    {title: 'Doctorate', percentage: '1'},
    {title: 'Prefer not to say', percentage: '1'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
