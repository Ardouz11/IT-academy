import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  /*trainings=[{'name':'first','description':'first training',src:"assets/img/brand/mm.jpeg"},
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
  navigateToDetails(title){
    console.log("the title of this training is ",title)
  }
  ngOnInit(): void {
  
      this.getTraining()
    
  
  }

}
