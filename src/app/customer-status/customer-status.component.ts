import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
 
    
   
  }

  ngOnInit(): void {
    
  }

}
