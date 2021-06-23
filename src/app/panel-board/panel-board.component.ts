import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../app-model/candidate';
import { UserService } from '../user.service';
import WebViewer from '@pdftron/webviewer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-board',
  templateUrl: './panel-board.component.html',
  styleUrls: ['./panel-board.component.css']
})
export class PanelBoardComponent implements OnInit, AfterViewInit {

  /* panelList:any = ['Neha','Manoj','Pruthvi'];
  grade : any = ['p3','p2','manager'];
  candidate_id: number = 123;
  candidate_name: string = 'Ravi';
  contact : number = 9999999999;
   */

  @ViewChild('viewer') viewerRef: ElementRef;

  candidate: Candidate =new Candidate();

  selStatus: string[] = [
    "Selected","Rejected","Hold"
  ]
  
  constructor( private service : UserService,private router: Router) { }

  cid: any;
  canFirstName: any;
  canLastName: any; 

  pid: any;
  panFirstName: any;
  panLastName: any; 
  grade: any;
  resume: any;
  skills: any;
  techs: any[];
  one: number = 0;
  two: number = 0;
  three: number = 0;
  four: number = 0;
  five: number = 0;
  rating:any =[];
  ratinga:any = 0;
  

  ngOnInit(): void {
    this.cid = sessionStorage.getItem('cid');
    this.canFirstName = sessionStorage.getItem('canFirstName');
    this.canLastName = sessionStorage.getItem('canLastName');
    this.resume = sessionStorage.getItem('resume');
    this.skills = sessionStorage.getItem('skills');

    this.techs = this.skills.split(',');

    this.pid = sessionStorage.getItem('pid');
    this.panFirstName = sessionStorage.getItem('firstName');
    this.panLastName = sessionStorage.getItem('lastName');
    this.grade = sessionStorage.getItem('grade');

    this.candidate.cid = this.cid;
    this.candidate.rating = (this.one+this.two+this.three+this.four+this.five)/5;

    console.log(this.techs);
    console.log(this.one);
  }

  

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      //initialDoc:'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
      initialDoc: 'assets/files/'+this.resume
    }, this.viewerRef.nativeElement).then(instance => {
    }); 
  }

  add(){
    for(let i=0;i<this.rating.length;i++){
        this.ratinga += this.rating[i];
    }
    this.ratinga/=(this.rating.length)*10;
    this.ratinga*=5;
    this.candidate.rating=this.ratinga;
    console.log(this.candidate);
    this.service.addCandidateDetail(this.candidate).subscribe(data=>{
      alert(JSON.stringify(data));
      //this.router.navigateByUrl('/panel-login')
    })
  }

}
