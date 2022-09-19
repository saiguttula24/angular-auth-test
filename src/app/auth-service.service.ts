import { EventEmitter, Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:any;

  getUser = new EventEmitter<any>();

  getEmail = new EventEmitter<any>();

  constructor(private auth:Auth) {
    this.getUser.subscribe(
      (user:any) => {
        this.user = user.displayName;
        console.log(user);
      } 
    )
    this.getEmail.subscribe(
      (user:any) => {
        this.user = user;
        console.log(user);
      }
    )
   }

  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  signup(username:string,password:string){
    return from(createUserWithEmailAndPassword(this.auth,username,password))
  }

  logout(){
    return from(this.auth.signOut());
  }

}
