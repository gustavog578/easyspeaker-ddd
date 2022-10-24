import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private baseUrl = 'http://localhost:3030/map';

  constructor(private http: HttpClient) { }
/*
  get(id) {
    return this.http.get(`${this.baseUrl}/teacher`, id);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/search`);
  }*/
  
  getTeachersByArea(data) {
    return this.http.post(`${this.baseUrl}/searchbyarea`, data);
  }


  updateTeacherByLanguage(data){
    return this.http.post(`${this.baseUrl}/searchbylanguage`, data);
  }
}
