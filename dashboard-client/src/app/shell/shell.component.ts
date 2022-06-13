import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { parseService } from 'src/services/parseService';
import { AppService } from '../app.service';
//import someObject from ('./../../dataMock.json')

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

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
    
  }

  test(): void{
   this.appService.getForm().subscribe((json: any) => {
     this.dataShell = json;
      return json;
    })
   }

}