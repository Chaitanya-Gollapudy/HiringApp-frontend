import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Candidate } from '../appmodel/Candidate';
import { UserService } from '../user.service';
>>>>>>> origin/master

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  input : any;
  filter: any;
  ul: any;
  li: any;
  txtValue : any;
<<<<<<< HEAD

  constructor() { }
=======
  candidate: Candidate = new Candidate();
  result:any = [];
  var:number=0;


  constructor(private service: UserService) {
    this.getCandidateDetails();
   }
>>>>>>> origin/master

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  getCandidateDetails(){
    this.service.getCandidates().subscribe(response=>{
      //alert(JSON.stringify(response));
      this.result = response;
      //alert(response[0].firstName);
    })
  }
>>>>>>> origin/master
  keyPress(event: KeyboardEvent) {
    this.input = document.getElementById("myInput");
    this.filter = this.input.value.toUpperCase();
    this.ul = document.getElementById("myUL");
    this.li = this.ul.getElementsByTagName("li");
    for (let i = 0; i < this.li.length; i++) {
        let a = this.li[i].getElementsByTagName("a")[0];
        this.txtValue = a.textContent || a.innerText;
        if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
            this.li[i].style.display = "";
        } else {
            this.li[i].style.display = "none";
        }
    }
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
}
