import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../Models/app-user';
import { AngularFireDatabase, } from '@angular/fire/database';
import { FirebaseObjectObservable } from '@angular/fire/database-deprecated';
import 'rxjs/add/observable/of'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase) {
    this.user$ = afAuth.authState;  
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

  // get appUser$() : Observable<User> {
  //   return this.user$
  //     .switchMap(user => {
  //       if (user) return this.get(user.uid);
  //       return Observable.of(null);
  //     });    
  // }

  logout(){
    localStorage.removeItem('token')
    this.afAuth.auth.signOut();
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // get(uid: string): FirebaseObjectObservable<User> { 
  //   return this.db.object('/users/' + uid);
  // }
}
