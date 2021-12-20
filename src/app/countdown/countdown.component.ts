import { Component, Input, OnInit ,OnDestroy} from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
@Input() start
private subscription: Subscription;
  
public dateNow = new Date();
public dDay 
milliSecondsInASecond = 1000;
hoursInADay = 24;
minutesInAnHour = 60;
SecondsInAMinute  = 60;

public timeDifference;
public secondsToDday;
public minutesToDday;
public hoursToDday;
public daysToDday;


private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
}

private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

ngOnInit() {
  this.dDay= new Date(this.start);
   this.subscription = interval(1000)
       .subscribe(x => { this.getTimeDifference(); });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
