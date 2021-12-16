import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  training_id;
  status;
  training_details;

  constructor(private restService:RestService,private activatedRoute:ActivatedRoute) { 
    this.training_id=this.activatedRoute.snapshot.params['id']
    console.log("the id passed is : ",this.activatedRoute.snapshot.params['id'])
  }
  getTrainingDetails(){
    // GET Request to get details of a training
    
    this.restService.get(this.training_id).subscribe((data:any)=>{
      this.training_details=data.data
      this.status=data.status;
      console.log("the resp is ",this.training_details," and the status is ",this.status)
    },error=>{
      this.status=0
      console.log("status is after error ",this.status)
  })
  }
  subscribeClient(subscribeForm){
    //POST To add customer   
    subscribeForm["id_training"]=this.training_id
    console.log(subscribeForm);
    this.restService.createCustomer(subscribeForm).subscribe((data:any)=>{
       this.status=data.status
       console.log("the resp is ",data)
       console.log("Response code status is "+data.status+" and response is "+data.data);
      // this.navigateToStatus(this.status)
       //this.router.navigate(['home'])     
    },error=>{
        this.status=0
        console.log("status is after error ",this.status)  
       // this.navigateToStatus(this.status)
      }
       );
        
   
   
  }
  
  ngOnInit(): void {
    this.getTrainingDetails()
  
  }

}
