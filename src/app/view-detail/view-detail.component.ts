import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../app-model/candidate';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  cid: number;
  candidate: Candidate = new Candidate();

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  select(){
    this.service.getCandidate(this.cid).subscribe(data=>{
      this.candidate.cid = data.cid;
      this.candidate.firstName = data.firstName;
      this.candidate.lastName = data.lastName;
      this.candidate.mobileNo = data.mobileNo;
      this.candidate.emailId = data.emailId;
      this.candidate.dateOfBirth = data.dateOfBirth;
      this.candidate.feedback = data.feedback;
      this.candidate.rating = data.rating;
      this.candidate.selStatus = data.selStatus;
      this.candidate.level = data.level;

      alert(JSON.stringify(data));
    });
  
    let firstName = this.candidate.firstName;
  }

  back(){
    this.router.navigateByUrl('admin');
  }
}
