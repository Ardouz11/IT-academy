import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name;
  phone;
  email;
  description;
  focus;
  focus1;
  status
  constructor(private restService:RestService,private router:Router ){

  }
  navigateToStatus(id){
      if(id==1){
          this.router.navigate(["statusContact/successful"])
      }
      else{
          this.router.navigate(["statusContact/unsuccessful"])
      }
      
  }

  sendInfos(formValues){
    //data to send via post request

    this.restService.addContactUs(formValues).subscribe((data:any)=>{
      this.status=data.status
      console.log("the resp is ",data)
      console.log("Response code status is "+data.status+" and response is "+data.data);
      this.navigateToStatus(this.status)  
   },error=>{
       this.status=0
       console.log("status is after error ",this.status) 
       this.navigateToStatus(this.status);});
       
  }


  ngOnInit(): void {
  }

}
