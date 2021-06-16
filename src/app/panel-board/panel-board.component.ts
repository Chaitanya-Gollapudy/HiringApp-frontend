import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-board',
  templateUrl: './panel-board.component.html',
  styleUrls: ['./panel-board.component.css']
})
export class PanelBoardComponent implements OnInit {

  /* panelList:any = ['Neha','Manoj','Pruthvi'];
  grade : any = ['p3','p2','manager'];
  candidate_id: number = 123;
  candidate_name: string = 'Ravi';
  contact : number = 9999999999;
   */
  
  constructor() { }

  cid: any;
  canFirstName: any;
  canLastName: any; 

  pid: any;
  panFirstName: any;
  panLastName: any; 
  grade: any;

  ngOnInit(): void {
    this.cid = sessionStorage.getItem('cid');
    this.canFirstName = sessionStorage.getItem('canFirstName');
    this.canLastName = sessionStorage.getItem('canLastName');

    this.pid = sessionStorage.getItem('pid');
    this.panFirstName = sessionStorage.getItem('panFirstName');
    this.panLastName = sessionStorage.getItem('panLastName');
    this.grade = sessionStorage.getItem('grade');
  }

}
