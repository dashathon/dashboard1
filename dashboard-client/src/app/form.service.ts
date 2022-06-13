import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const ENDPOINT = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  getFormData(): Observable<any> {
    return this.http.get(ENDPOINT + 'getForm');
  }

  getFormResponses(): Observable<any> {
    return this.http.get(ENDPOINT + 'getResponses');
  }
}
