import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  training_id;
  status;
  training_details;
  training_title1;
  training_title2;
  closeResult: string;


  constructor(private modalService: NgbModal,private restService:RestService,private activatedRoute:ActivatedRoute,private router:Router ) { 
    this.training_id=this.activatedRoute.snapshot.params['id']
    console.log("the id passed is : ",this.activatedRoute.snapshot.params['id'])
  }
  navigateToStatus(id){
    if(id==1){
        this.router.navigate(["statusInscription/successful"])
    }
    else{
        this.router.navigate(["statusInscription/unsuccessful"])
    }
    
}
  getTrainingDetails(){
    // GET Request to get details of a training
    
    this.restService.get(this.training_id).subscribe((data:any)=>{
      this.training_details=data.resultTraining
      this.training_title1=data.resultsTitle1
      this.status=data.status;
      console.log("the resp is ",this.training_details,"and title1 is ",this.training_title1, " and the status is ",this.status)
    },error=>{
      this.status=0
      console.log("status is after error ",this.status)
  })
  }
  subscribeClient(subscribeForm){
    //POST To add customer   
    subscribeForm["id_training"]=this.training_id
    console.log(subscribeForm);
    this.restService.addPerson(subscribeForm).subscribe((data:any)=>{
       this.status=data.status
       console.log("the resp is ",data)
       console.log("Response code status is "+data.status+" and response is "+data.data);
       this.navigateToStatus(this.status)
       //this.router.navigate(['home'])     
    },error=>{
        this.status=0
        console.log("status is after error ",this.status)  
       this.navigateToStatus(this.status)
      }
       );
        
   
   
  }
  
  ngOnInit(): void {
    this.getTrainingDetails()
  
  }


  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}

}
