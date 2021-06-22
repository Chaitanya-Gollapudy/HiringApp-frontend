import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createRoom(){
    let win = window.open('http://localhost:3000/');
  }

  shareLink(){
    let link = prompt("Enter the Room-Id","");
    if(link!=null || link!="")
    {
      alert(link);
    }
  }

}
