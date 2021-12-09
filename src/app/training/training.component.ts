import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 constructor(private restService:RestService,private router:Router) {

  
   }
  getTraining(){
    // GET Request to get all trainings
    this.restService.getAll().subscribe((data:any)=>{
      this.trainings=data.data
      this.status=data.status;
    },error=>{
      this.status=0
      console.log("status is after error ",this.status)     })
  }
  navigateToDetails(id){
    this.router.navigate(["trainingDetails",id])
   // console.log("the id of this training is ",id)
  }
  ngOnInit(): void {
  
      this.getTraining()
    
  
  }

}
