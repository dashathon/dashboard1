import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/services/ResponseService';
import { FormService } from '../form.service';
import { widegts } from '../widget-size';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  responseService = new ResponseService();
  formData = {};
  formResponses = {};

  distribution = {
    first: widegts.demographics,
    second: widegts.communityMeasures,
    third: widegts.individualMeasures
  }

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.responseService.parseUser();
    console.log(this.responseService);
  }

  public get widgets(): typeof widegts {
    return widegts; 
  }

  test(): void{
  //  this.appService.getForm().subscribe((json: any) => {
  //    this.dataShell = json;
  //     return json;
  //   })
}

}