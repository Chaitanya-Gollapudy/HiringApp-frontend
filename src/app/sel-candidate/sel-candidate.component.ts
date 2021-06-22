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
      console.log(data);
      alert(JSON.stringify(data));
      let cid = data.cid;
      let canFirstName = data.firstName;
      let canLastName = data.lastName;
      let resume = data.resume;
      let skills = data.skills;
    
      sessionStorage.setItem('cid',String(cid));
      sessionStorage.setItem('canFirstName',String(canFirstName));
      sessionStorage.setItem('canLastName',String(canLastName));
      sessionStorage.setItem('resume',String(resume));
      sessionStorage.setItem('skills',String(skills));


      this.router.navigateByUrl('sel-panellist');
    })
  }

  back(){
    this.router.navigateByUrl('admin');
  }
  
}
