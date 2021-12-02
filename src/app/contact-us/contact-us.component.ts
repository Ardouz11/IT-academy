import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name;
  phone;
  email;
  description;
  focus;
  focus1;
  constructor(private restService:RestService) { }
  sendInfos(formValues){
    //data to send via post request
    console.log("before ",formValues);
    console.log("response ",this.restService.addContactUs(formValues));
    console.log("after ",formValues);
    

  }


  ngOnInit(): void {
  }

}
