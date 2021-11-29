import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  name;
  phone;
  email;
  description;
  constructor() { }
  sendInfos(formValues){
    //data to send via post request
    console.log(formValues);
    

  }
  ngOnInit() {}

}
