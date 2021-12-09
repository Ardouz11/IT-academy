import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {
  id;
  status;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.status=this.activatedRoute.snapshot.params['id']
    if(this.status=="successful")
    {
      this.id=1
    }
    else{
      this.id=0
    }
  }

  ngOnInit(): void {
  }

}
