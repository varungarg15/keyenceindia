import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router,private afauth:AngularFireAuth){}
  
  canActivate(route,state:RouterStateSnapshot):boolean{
    if(this.afauth.auth.currentUser||localStorage.getItem('token')){
      console.log('logvn')
      return true;

    }else{
      console.log('not logvn')
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
      return false
    }
  }
  
}
