import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LanguagesService {


  private baseUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }


  getLanguages() {
    return this.http.get(`${this.baseUrl}/languages`);
  }

  

}
