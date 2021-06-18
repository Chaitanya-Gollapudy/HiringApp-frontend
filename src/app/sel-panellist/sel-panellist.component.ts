import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sel-panellist',
  templateUrl: './sel-panellist.component.html',
  styleUrls: ['./sel-panellist.component.css']
})
export class SelPanellistComponent implements OnInit {

  pid: number;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  add(){
    this.service.getPanellist(this.pid).subscribe(data=>{
      alert(JSON.stringify(data));

      let pid = data.pid;
      let panFirstName = data.firstName;
      let panLastName = data.lastName;
      let grade = data.grade;

      sessionStorage.setItem('pid',String(pid));
      sessionStorage.setItem('panFirstName',String(panFirstName));
      sessionStorage.setItem('panLastName',String(panLastName));
      sessionStorage.setItem('grade',String(grade));

      this.router.navigateByUrl('admin');
    })
  }

  back(){
    this.router.navigateByUrl('sel-candidate');
  }
}
