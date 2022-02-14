import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-training',
  templateUrl: './free-training.component.html',
  styleUrls: ['./free-training.component.css']
})
export class FreeTrainingComponent implements OnInit {

  constructor(private router:Router) { }

  navigateToDetails(){
    this.router.navigate(["FreeTrainingContentComponent"])
  }

  ngOnInit(): void {
  }

}
