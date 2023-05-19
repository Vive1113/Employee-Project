import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword='';
 

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
 
ngOnInit(){

}
resetPassword(){
  if(this.email === '' || this.password === '' || this.confirmPassword === ''){
    var status = confirm("It is mandatory to fill all the fields");
  }
  else{
  var status = confirm("Password Resetted");
  if(status==true){
    this.router.navigate(['login-page']);
  }
}
}




}



