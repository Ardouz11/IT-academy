import { Component, OnInit } from '@angular/core';

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
  sendInfos(formValues){
    //data to send via post request
    console.log(formValues);
    

  }
  constructor() { }

  ngOnInit(): void {
  }

}
