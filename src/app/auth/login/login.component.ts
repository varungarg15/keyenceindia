import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private afAuth: AngularFireAuth){}

  ngOnInit(){
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
    
  }

  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }

  onActivate(event) {
    window.scroll(0,0);    
 }

 successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
  console.log('successCallback', data);
  this.router.navigate(['/']);
}

errorCallback(data: FirebaseUISignInFailure) {
  console.warn('errorCallback', data);
}

}
