import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-measures-widget-farther',
  templateUrl: './event-measures-widget-farther.component.html',
  styleUrls: ['./event-measures-widget-farther.component.scss']
})
export class EventMeasuresWidgetFartherComponent implements OnInit {



  goodEvent = ['date management', 'The competitive spirit is very high among the participants', 'The new two stage format. Its a great innovation.']
  improveEvent = ['Time about checkpoints', 'The duration of the contest should depend on the problem statement, The current schedule of weekend long contest is fine. But longer time frame could be considered with a higher prize money.', 'Weekend type problem requires a quick and dirty fix to the problem inspite the difficulty level. So it may not be possible to dig really deep into the dataset given the time constraints.']
  openSharing = ['We need more beer!', 'Overall experience of the hackathon has been very good and would recommend to others.', 'Nothing to improve here, just awesome stuff happened!']


  constructor() { }

  ngOnInit(): void {
  }

}
