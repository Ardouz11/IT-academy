import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  /*trainings=[{'name':'first','description':'first training',src:"assets/img/brand/mm.jpeg"},
  {'name':'second','description':'Second training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'third','description':'Third training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'first','description':'first training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'second','description':'Second training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'third','description':'Third training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  {'name':'fourth','description':'Fourth training',src:"https://material.angular.io/assets/img/examples/shiba2.jpg"}]
  */
 trainings=[];
 status;
 constructor(private restService:RestService) {

  
   }
  getTraining(){
    // GET Request to get all trainings
    this.restService.getAll().subscribe((data:any)=>{
      this.trainings=data.data
      this.status=data.status;
    })
  }
  ngOnInit(): void {
   this.getTraining()
  }

}
