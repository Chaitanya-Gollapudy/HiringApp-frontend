import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../app-model/candidate';
import { UserService } from '../user.service';

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.css']
})
export class PanelLoginComponent implements OnInit {

  status="upcoming";
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
