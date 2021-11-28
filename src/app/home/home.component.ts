import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    name;
    phone;
    email;
    description;
    sendInfos(formValues){
      //data to send via post request
      console.log(formValues);
      
  
    }
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
