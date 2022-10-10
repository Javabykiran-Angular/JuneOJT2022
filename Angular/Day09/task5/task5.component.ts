import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  record:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(id:any,name:any,sal:any){
      this.record.push({
        id:id,name:name,salary:sal
      })
  }

  onRemove(i:any){
    this.record.splice(i,1);
  }

}
