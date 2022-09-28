import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   
    if(this.count==0){
    console.log("Click event Occur...")
    this.count++;
    }
  }

  onImg(){
    console.log("image click occur!!")
  }

  onDollerEvent(myevent:any){

    console.log(myevent);
    console.log("Data=> "+myevent.target.value)
  }

  onSend(myname:any){
    console.log(myname);
    console.log("---------> "+myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }
  onSend1(namevalue:string){
    console.log("==== "+namevalue)
  }


}
