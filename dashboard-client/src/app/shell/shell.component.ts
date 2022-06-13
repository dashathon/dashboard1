import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { reduce } from 'rxjs';
import { parseService } from 'src/services/parseService';
import { AppService } from '../app.service';
//import someObject from ('./../../dataMock.json')
=======
import { FormService } from '../form.service';
import { widegts } from '../widget-size';
>>>>>>> origin/Helge

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

<<<<<<< HEAD
  dataShell?: any;
  constructor(private appService: AppService) {
    //console.log(someObject);
   }

  ngOnInit(): void {
    this.test();
    let ParseService = new parseService();
    for (let index = 0; index < 50; index++) {
      ParseService.doSth();
    }
    console.log(ParseService);
    
=======
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
>>>>>>> origin/Helge
  }

  test(): void{
   this.appService.getForm().subscribe((json: any) => {
     this.dataShell = json;
      return json;
    })
   }

}