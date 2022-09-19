import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onClickSignup(userName:string,password:string){
    this.authService.signup(userName,password).subscribe(
      res => {
        this.router.navigate(['/login']);
        alert("Signup Successful");
      },
      err => {
        alert("Sorry, Request failed");
      }
    )
  }

}
