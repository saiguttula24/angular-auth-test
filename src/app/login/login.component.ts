import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service.service';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  provider:any;
  user:any;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    const provider = new GoogleAuthProvider();
    this.provider = provider;
  }

  onClickLogin(userName:string,password:string){
    this.authService.login(userName,password).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

  onClickGoogleLogin(){
    const auth = getAuth();
signInWithPopup(auth, this.provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    let a:any;
    a = credential
    const token = a.accessToken;
    const user = result.user;
    console.log(user);
    this.router.navigate(['/home']);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

}