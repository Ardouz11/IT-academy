import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-free-training-content',
  templateUrl: './free-training-content.component.html',
  styleUrls: ['./free-training-content.component.css']
})
export class FreeTrainingContentComponent implements OnInit {

  constructor(private modalService: NgbModal,private restService:RestService,private router:Router ){

}
name;
email;
phone;
status;
response;
focus;
focus1;
  ngOnInit(): void {
  }

  closeResult: string;
  navigateToStatus(id){
    if(id==1){
        this.router.navigate(["statusInscription/successful"])
    }
    else{
        this.router.navigate(["statusInscription/unsuccessful"])
    }
    
}
  subscribeClient(subscribeForm){
    //POST To add customer   
    subscribeForm["id_training"]="free"
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
