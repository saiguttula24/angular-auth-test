import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      this.authService.logout();
      this.router.navigate(['/login']);
  }


}
