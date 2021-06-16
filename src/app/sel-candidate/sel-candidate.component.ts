import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sel-candidate',
  templateUrl: './sel-candidate.component.html',
  styleUrls: ['./sel-candidate.component.css']
})
export class SelCandidateComponent implements OnInit {

  cid: number;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  add(){
    this.service.getCandidate(this.cid).subscribe(data=>{
      alert(JSON.stringify(data));
      this.router.navigateByUrl('sel-panellist');
    })
  }
}
