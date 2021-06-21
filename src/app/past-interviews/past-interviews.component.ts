import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../app-model/candidate';
import { UserService } from '../user.service';

@Component({
  selector: 'app-past-interviews',
  templateUrl: './past-interviews.component.html',
  styleUrls: ['./past-interviews.component.css']
})
export class PastInterviewsComponent implements OnInit {

  status="rejected";
  cid: number;
  candidate: Candidate = new Candidate();
  result: any = [];


  constructor(private router:Router,private service: UserService) { }

  ngOnInit(): void {
    this.service.fetchCandidate().subscribe(response=>{
      //alert(JSON.stringify(response));
      this.result =response;
    });
  }

}
