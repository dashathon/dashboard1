import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const ENDPOINT = 'https://colaps-hacktrack.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  getFormResponses(uuid: string): Observable<any> {
    return this.http.get(ENDPOINT + 'form/' + uuid + '/responses');
  }
}
