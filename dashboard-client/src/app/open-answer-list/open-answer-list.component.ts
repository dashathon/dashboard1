import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-answer-list',
  templateUrl: './open-answer-list.component.html',
  styleUrls: ['./open-answer-list.component.scss']
})
export class OpenAnswerListComponent implements OnInit {

  @Input()
  answerList = Array<string>();

  @Input()
  captionText?: string;

  @Input()
  captionTooltip?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
