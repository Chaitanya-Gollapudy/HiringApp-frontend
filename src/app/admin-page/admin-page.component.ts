import { Component, OnInit } from '@angular/core';
import { Candidate } from '../appmodel/Candidate';
import { UserService } from '../user.service';

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
  candidate: Candidate = new Candidate();
  result:any = [];
  var:number=0;


  constructor(private service: UserService) {
    this.getCandidateDetails();
   }

  ngOnInit(): void {
  }

  getCandidateDetails(){
    this.service.getCandidates().subscribe(response=>{
      //alert(JSON.stringify(response));
      this.result = response;
      //alert(response[0].firstName);
    })
  }
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

}
