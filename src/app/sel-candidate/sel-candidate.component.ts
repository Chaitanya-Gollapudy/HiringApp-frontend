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
      alert(JSON.stringify(data.firstName));
      let cid = data.cid;
      let canFirstName = data.firstName;
      let canLastName = data.lastName;

      sessionStorage.setItem('cid',String(cid));
      sessionStorage.setItem('canFirstName',String(canFirstName));
      sessionStorage.setItem('canLastName',String(canLastName));

      this.router.navigateByUrl('sel-panellist');
    })
  }

  back(){
    this.router.navigateByUrl('admin');
  }
  
}
