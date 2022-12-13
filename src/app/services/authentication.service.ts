import { Injectable } from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from '@angular/fire/auth'
import { from, retry, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: any, password: any){
    return from(signInWithEmailAndPassword(this.auth, username, password))
  }

  signUp(name: any, email: any, password: any){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(switchMap(({user}) => updateProfile(user, {displayName: name}))
    )
  }

  logout(){
    return from(this.auth.signOut())
  }
}
