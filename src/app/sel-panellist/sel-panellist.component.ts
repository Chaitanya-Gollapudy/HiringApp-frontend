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
      this.router.navigateByUrl('');
    })
  }

}
