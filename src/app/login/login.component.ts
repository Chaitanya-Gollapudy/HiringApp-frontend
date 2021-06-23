import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../app-model/login';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message: string;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  loginCheck(event: any){
    if(this.login.pid == null || this.login.password == null){
      Swal.fire({
        title: "Error",
        text: "Login id and password required",
        icon: "error",
        confirmButtonText: "Okay"
      });
    }
    else{

      this.service.login(this.login).subscribe(response =>{

        if(response.status == true){
          
          let pid = response.pid;
          let firstName = response.firstName;
          let lastName = response.lastName;
          
          sessionStorage.setItem('pid',String(pid));
          sessionStorage.setItem('firstName',String(firstName));
          sessionStorage.setItem('lastName',String(lastName));

          Swal.fire({
            title: "Successful",
            text: "Login Successful",
            icon: "success",
            confirmButtonText: "Okay"
          });
          
          this.router.navigate(['panel-login']);

        }
        else{
          this.message = response.message;
        }
      })
    }
}

}
