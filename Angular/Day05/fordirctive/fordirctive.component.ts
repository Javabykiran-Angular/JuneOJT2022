import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirctive',
  templateUrl: './fordirctive.component.html',
  styleUrls: ['./fordirctive.component.css']
})
export class FordirctiveComponent implements OnInit {


  course:string[]=['Angular 12','React Js','Core java','Spring Boot','JSP'];

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

  selected:string='';
  
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse Over Event Occur");
    console.log(item)
    this.selected=item.name;
  }


  onMouseOut(){
    console.log("======= mouse out event occur ")
    this.selected='';
  }

}
