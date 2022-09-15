import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';
import { AuthenticationService } from '../auth-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private authService:AuthenticationService, private router: Router) { }

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
