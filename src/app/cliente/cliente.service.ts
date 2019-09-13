import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Concept } from '../cliente/Concept';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContacts() {

    return this.http.get(`${this.API_URI}/concept`);

  }

  getContact(id: any) {
    return this.http.get(`${this.API_URI}/concept/${id}`);

  }


  saveConcept(concept: Concept) {

    return this.http.post(`${this.API_URI}/concept`, concept);

  }


  updateConcept(id, update) {
    return this.http.put(`${this.API_URI}/concept/${id}`, update);

  }

  deleteConcept(id: string) {
    return this.http.delete(`${this.API_URI}/concept/${id}`);


  }


}
