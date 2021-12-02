import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const baseUrlTrainings = 'http://localhost:8080/trainings';
const baseUrlCustomer='http://localhost:8080/customer';
const baseUrlContactUS='http://localhost:8080/contactus';
const headers = { 'content-type': 'application/json'} 
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrlTrainings);
  }

  get(id) {
    return this.http.get(`${baseUrlTrainings}/${id}`).pipe(map(res => {return res;}));;
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
    return this.http.post(baseUrlCustomer, data).subscribe();

  }
  addContactUs(data){
    return this.http.post(baseUrlContactUS, data).subscribe();
  }
}
