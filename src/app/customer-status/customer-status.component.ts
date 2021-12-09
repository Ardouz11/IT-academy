import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {
status;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.status=this.activatedRoute.snapshot.params['id']
    console.log("status const ",this.status)
    
   
  }

  ngOnInit(): void {
    
  }

}
