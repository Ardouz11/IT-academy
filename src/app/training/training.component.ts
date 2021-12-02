import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  trainings=[{'name':'first','description':'first training',src:"assets/img/brand/mm.jpeg"},
  {'name':'second','description':'Second training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'third','description':'Third training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'first','description':'first training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'second','description':'Second training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'third','description':'Third training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"}]
  constructor() {

  
   }
  getTraining(){
    // GET Request to get all trainings
  }
  ngOnInit(): void {
  }

}
