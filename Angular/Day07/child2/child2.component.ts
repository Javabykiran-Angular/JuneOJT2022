import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildStrEvent=new EventEmitter();

  @Output() ChildArrObjEvent=new EventEmitter();

  strdata:string='Hopes so u r enjoying angular 12 Module...'

  productArr=[
    {
      name:'Motorola',
      price:30000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'OnePlus',
      price:35000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    }

];

  @Output() ChildDropDownData=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSendData(){
      this.ChildStrEvent.emit(this.strdata);
      this.ChildArrObjEvent.emit(this.productArr);

  }

  onSelect(myevent:any){
      this.ChildDropDownData.emit(myevent.target.value);
  }

}
