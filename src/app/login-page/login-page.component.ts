import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = '';
  password ='';
  emessage ='';
  invalidLogin = false

  constructor(private router: Router, 
   private loginservice: AuthenticationService) { }
  
  ngOnInit(){

  }

  checkLogin() {

    if (this.loginservice.authenticate(this.email, this.password)
    ) {
    this.router.navigate(['employees']);
    console.log("navigate..");
    this.invalidLogin=false;
    }else
    this.invalidLogin=true;
    this.emessage ="Enter correct Email or Password!!";
    }



}







