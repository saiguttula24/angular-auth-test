import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, getRedirectResult, GoogleAuthProvider, signOut } from 'firebase/auth';
import { AuthenticationService } from '../auth-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any;

  constructor( private authService:AuthenticationService, private router: Router) {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result | any);
        const token = credential?.accessToken;

        // The signed-in user info.
        this.user = result?.user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
   }

  ngOnInit(): void {
    
  }


  onClickLogout() {
      this.authService.logout().subscribe(()=>{
        this.router.navigate(['/login'])
      }
      );
      const auth = getAuth();
      signOut(auth).then(() => {
        this.router.navigate(['/login']);
      }).catch((error) => {
        // An error happened.
      });
      

  }


}
