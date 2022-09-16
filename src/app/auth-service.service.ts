import { EventEmitter, Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:any;

  getUser = new EventEmitter<any>();

  constructor(private auth:Auth) {
    this.getUser.subscribe(
      (user:any) => {
        this.user = user;
        console.log(user.displayName);
      } 
    )
   }

  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  logout(){
    return from(this.auth.signOut());
  }

}
