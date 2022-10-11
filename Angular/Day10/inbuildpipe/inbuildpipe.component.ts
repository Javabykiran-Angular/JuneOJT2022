import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

  strdata:string='you Learn angular 12 From Sumit raokhande';
  num2:number=-452.78956324557;

  namepalceholder:string='enter the name';

  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
