import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const baseUrlTrainings = 'http://itsren-academy.com/api/trainings';
const baseUrlCustomer='http://itsren-academy.com/api/customer';
const baseUrlPerson='http://itsren-academy.com/api/person';
const baseUrlContactUS='http://itsren-academy.com/api/contactus';
const baseUrlListOfCustomers='http://itsren-academy.com/api/listOfCustomers';
const headers = { 'content-type': 'application/json'} 
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrlTrainings);
  }

  get(id) {
    return this.http.get(`${baseUrlTrainings}/${id}`);
  }
  getListOfCustomers(id) {
    return this.http.get(`${baseUrlListOfCustomers}/${id}`);
  }
  create(data) {
    return this.http.post(baseUrlTrainings, data).pipe(map(res => {return res;}));
  }

  update(id, data) {
    return this.http.put(`${baseUrlTrainings}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrlTrainings}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrlTrainings);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrlTrainings}?title=${title}`);
  }
  createCustomer(data){
    return this.http.post(baseUrlCustomer, data);

  }
  addPerson(data){
    return this.http.post(baseUrlPerson, data);

  }
  addContactUs(data){
    return this.http.post(baseUrlContactUS, data);
  }
}
