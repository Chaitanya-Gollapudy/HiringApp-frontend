import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createRoom(){
    let win = window.open('http://localhost:3000/');
    this.router.navigateByUrl('/panel-board');
  }

  shareLink(){
    let link = prompt("Enter the Room-Id","");
    if(link!=null || link!="")
    {
      alert(link);
    }
  }

}
