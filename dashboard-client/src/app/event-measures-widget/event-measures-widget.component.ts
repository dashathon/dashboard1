import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-measures-widget',
  templateUrl: './event-measures-widget.component.html',
  styleUrls: ['./event-measures-widget.component.scss']
})
export class EventMeasuresWidgetComponent implements OnInit {

  overall_view: [number, number] = [300, 300];
  polar_view: [number, number] = [1100, 400];
  future_view: [number, number] = [600, 400];

  overall_legend:boolean = true;
  overall_legendTitle: string = "";
  overall_showXAxis: boolean = true;
  overall_showYAxis: boolean = true;
  overall_gradient: boolean = false;
  overall_showLegend: boolean = true;
  overall_showXAxisLabel: boolean = true;
  overall_yAxisLabel: string = '';
  overall_showYAxisLabel: boolean = true;
  overall_xAxisLabel: string = '';
  overall_maxRadius: number = 5;
  overall_minRadius: number = 1;
  overall_yScaleMin: number = -10;
  overall_yScaleMax: number = 10;

  polar_legend:boolean = true;
  polar_legendTitle: string = "";
  polar_showLabels: boolean = true;
  polar_animations: boolean = true;
  polar_xAxis: boolean = true;
  polar_yAxis: boolean = true;
  polar_showYAxisLabel: boolean = true;
  polar_showXAxisLabel: boolean = true;
  polar_xAxisLabel: string = 'Year';
  polar_yAxisLabel: string = 'Population';

  overall_colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  polar_colorScheme = {domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']};

  overallData = [
    {
      "name": "dissatisfied to satisfied",
      "series": [
        {
          "name": "1",
          "value": 73000000
        },
        {
          "name": "2",
          "value": 23400000
        },
        {
          "name": "3",
          "value": 54000000
        },{
          "name": "4",
          "value": 23000000
        },{
          "name": "5",
          "value": 53000000
        }
      ]
    },

    {
      "name": "displeased to pleased",
      "series": [
        {
          "name": "1",
          "value": 633000000
        },
        {
          "name": "2",
          "value": 11400000
        },
        {
          "name": "3",
          "value": 32000000
        },{
          "name": "4",
          "value": 43000000
        },{
          "name": "5",
          "value": 43000000
        }
      ]
    },

    {
      "name": "frustrated to contented",
      "series": [
        {
          "name": "1",
          "value": 83000000
        },
        {
          "name": "2",
          "value": 43400000
        },
        {
          "name": "3",
          "value": 62000000
        },{
          "name": "4",
          "value": 39000000
        },{
          "name": "5",
          "value": 86000000
        }
      ]
    },
    {
      "name": "terrible to delight",
      "series": [
        {
          "name": "1",
          "value": 34000000
        },
        {
          "name": "2",
          "value": 72400000
        },
        {
          "name": "3",
          "value": 48000000
        },{
          "name": "4",
          "value": 56000000
        },{
          "name": "5",
          "value": 23000000
        }
      ]
    }
  ];

  multi = [
    {
      "name": "Pre-event webinar",
      "series": [
        {
          "name": "enjoyable",
          "value": 6800
        },
        {
          "name": "satisfied",
          "value": 6400
        },
        {
          "name": "useful",
          "value": 6800
        }
      ]
    },

    {
      "name": "Checkpoints",
      "series": [
        {
          "name": "enjoyable",
          "value": 3900
        },
        {
          "name": "satisfied",
          "value": 5700
        },
        {
          "name": "useful",
          "value": 10400
        }
      ]
    },

    {
      "name": "Mentoring sessions",
      "series": [
        {
          "name": "enjoyable",
          "value": 8500
        },
        {
          "name": "satisfied",
          "value": 10000
        },
        {
          "name": "useful",
          "value": 1500
        }
      ]
    },
  ];

   single = [
    {
      "name": "Definitely not",
      "value": 5
    },
    {
      "name": "Probably not",
      "value": 12
    },
    {
      "name": "Probably yes",
      "value": 85
    },
    {
      "name": "Definitely yes",
      "value": 17
    },
    {
      "name": "MightOfMight not",
      "value": 31
    }
  ];

  answerList = ['Better feedback', 'The mentors could have been more productive in regards of helping with coding.', 'Nothing to improve here, just awesome stuff happened!']


  constructor() { }

  ngOnInit(): void {
  }

}
