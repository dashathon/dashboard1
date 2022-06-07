import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { widegts } from '../widget-size';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  formData = {};
  formResponses = {};

  distribution = {
    first: widegts.demographics,
    second: widegts.communityMeasures,
    third: widegts.individualMeasures
  }

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getFormData().subscribe((json: any) => {
      this.formData = json;
      console.log(this.formData);
    }, error => {
      console.log(error);
    });
    this.formService.getFormResponses().subscribe((json: any) => {
      this.formResponses = json;
      console.log(this.formResponses);
    }, error => {
      console.log(error);
    });
  }

  public get widgets(): typeof widegts {
    return widegts; 
  }

}
