import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-distribution',
  templateUrl: './gender-distribution.component.html',
  styleUrls: ['./gender-distribution.component.scss']
})
export class GenderDistributionComponent implements OnInit {

  answerList = [
    {title: 'male', value: '35', percentage: '47'},
    {title: 'female', value: '35', percentage: '47'},
    {title: 'non binary', value: '5', percentage: '5'},
    {title: 'N/A', value: '1', percentage: '1'},
  ]

  @Input()
  captionText?: string;

  @Input()
  captionTooltip?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
