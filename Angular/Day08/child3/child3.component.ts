import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

username:string='Default value...';
count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay(){

      alert("Welcome  "+this.username);
  }


  incrementCount(){
      this.count++;
  }

  decrementCout(){
    this.count--;
  }


}
