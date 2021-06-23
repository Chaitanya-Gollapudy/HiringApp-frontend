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

  cid:any
  link:any= "/"
  ngOnInit(): void {
  }

  createRoom(){
    let win = window.open('http://localhost:3000/');
  }

  shareLink(){
    this.link = prompt("Enter the Room-Id","/");
    if(this.link!=null || this.link!="")
    {   
      this.cid = sessionStorage.getItem('cid') ; 
      //alert(this.cid+this.link)
      this.service.sendMail(this.cid,this.link);
      alert('Mail Sent Successfully');
      this.router.navigateByUrl('/panel-board');
    }
  }

}
