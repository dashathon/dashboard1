import { Component, OnInit } from '@angular/core';
import { userAnswers } from 'src/services/data';
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
  uuid = '';
  loadingData = false;
  error = false;
  initialState = true;

  distribution = {
    first: widegts.demographics,
    second: widegts.communityMeasures,
    third: widegts.individualMeasures
  }

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    
  }

  getFormData() {
    this.error = false;
    if (this.uuid.length > 0) {
      this.initialState = false;
      this.loadingData = true;
      this.formService.getFormResponses(this.uuid).subscribe(response => {
        if (Object.keys(response).length === 0) {
          this.error = true;
        } else {
          this.responseService = new ResponseService();
          this.responseService.parseUser({"responses": [{"answers": []}]});
          this.responseService.parseUser(response);
          this.loadingData = false;
        }
        // this.responseService.parseUser(userAnswers);
        console.log(this.responseService);
      }, error => {
        this.error = true;
      });
    }
  }

  public get widgets(): typeof widegts {
    return widegts; 
  }
}