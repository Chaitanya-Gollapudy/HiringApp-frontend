import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private router: Router,private service: UserService) { }

  cid:number
  link:string= ""
  ngOnInit(): void {
  }

  createRoom(){
    let win = window.open('http://localhost:3000/');
  }

  shareLink(){
    this.link = String(prompt("Enter the Room-Id",""));
    if(this.link!=null || this.link!="")
    {   
      this.cid = Number(sessionStorage.getItem('cid') ); 
      //alert(this.cid+this.link)
      this.service.sendMail(this.cid,this.link).subscribe(response=>{
        console.log(this.cid+this.link);
        console.log(response);
      alert('Mail Sent Successfully');
      });
      this.router.navigateByUrl('/panel-board');
    }
  }

}
