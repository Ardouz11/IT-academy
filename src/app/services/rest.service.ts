import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const baseUrlTrainings = 'http://localhost:8080/api/trainings';
const baseUrlCustomer='http://localhost:8080/api/customer';
const baseUrlPerson='http://localhost:8080/api/person';
const baseUrlContactUS='http://localhost:8080/api/contactus';
const baseUrlListOfCustomers='http://localhost:8080/api/listOfCustomers';
const headers = { 'content-type': 'application/json'} 
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrlTrainings,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }

  get(id) {
    return this.http.get(`${baseUrlTrainings}/${id}`,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }
  getListOfCustomers(id) {
    return this.http.get(`${baseUrlListOfCustomers}/${id}`,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }
  create(data) {
    return this.http.post(baseUrlTrainings, data,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    }).pipe(map(res => {return res;}));
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
    return this.http.post(baseUrlCustomer, data,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });

  }
  addPerson(data){
    return this.http.post(baseUrlPerson, data,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });

  }
  addContactUs(data){
    return this.http.post(baseUrlContactUS, data,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }
}
