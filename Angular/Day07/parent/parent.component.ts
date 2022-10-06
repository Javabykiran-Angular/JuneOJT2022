import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    strdata:string='Sumit Raokhande of Angular 12 Trainer';

    jsonObj={
      id:9,
      fname:'Sumit',
      role:'DevOps'
    }
    course:string='';

    ChildStrData:string='';
    childArrObj:any[]=[];
    CourseData:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.course='Angular 12';
  }

}
