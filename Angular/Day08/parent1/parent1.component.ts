import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('msgdiv') mydiv!:ElementRef;

  @ViewChild(Child3Component) childComp!:Child3Component;





  constructor() { }


  ngOnInit(): void {
    console.log(this.mydiv);
  }

  ngAfterViewInit(): void {
    console.log(this.mydiv);
    this.mydiv.nativeElement.style.background='green'
    this.mydiv.nativeElement.style.color='white';
  }

  onPropertyAccess(){
      this.childComp.username='Sumit Raokhande';
  }

  onAccessMethod(){
      this.childComp.onDisplay();
  }

  onInc(){
      this.childComp.incrementCount();
  }

  onDec(){
      this.childComp.decrementCout();
  }

}
