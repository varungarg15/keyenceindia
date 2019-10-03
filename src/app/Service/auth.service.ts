import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
   }

   isLoggedIn(){
    if(this.afAuth.auth.currentUser)
      return true;
    else return false
   }

   firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
