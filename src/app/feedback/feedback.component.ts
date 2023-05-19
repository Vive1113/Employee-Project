import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
 
ngOnInit(){

}
feedbackSend(){
  var status = confirm("Feedback Submitted Thankyou!!");
  if(status==true){
    this.router.navigate(['employees']);
  }
}

}


