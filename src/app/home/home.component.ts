import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../services/rest.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    name;
    email;
    phone;
    status;
    response;
    constructor(private modalService: NgbModal,private restService:RestService,private router:Router ){

    }
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
     console.log(subscribeForm);
     this.restService.createCustomer(subscribeForm).subscribe((data:any)=>{
        this.status=data.status
        console.log("the resp is ",data)
        console.log("Response code status is "+data.status+" and response is "+data.data);
        this.navigateToStatus(this.status)
        //this.router.navigate(['home'])     
     },error=>{
         this.status=0
         console.log("status is after error ",this.status)  
         this.navigateToStatus(this.status)});
         
    
    }
    
    focus;
    focus1;
    closeResult: string;
  

    ngOnInit() {}

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

