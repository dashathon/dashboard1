import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
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
  }

  test(): void{
   this.appService.getForm().subscribe((json: any) => {
     this.dataShell = json;
      return json;
    })
   }

}