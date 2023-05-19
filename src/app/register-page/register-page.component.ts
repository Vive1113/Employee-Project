import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  email = '';
  password = '';
  username ='';

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
 
ngOnInit(){

}
confirmRegister(){

if(this.username === '' || this.email === '' || this.password === ''){
  var status = confirm("It is mandatory to fill all the fields");
}
else{
var status = confirm("Registered Successfully");
if(status==true){
  this.router.navigate(['login-page']);
}
}
}

}




