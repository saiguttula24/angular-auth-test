import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onClickLogin(userName:string,password:string){
    this.authService.login(userName,password).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

}