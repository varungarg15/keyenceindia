import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyenceindia';
  constructor(private ngxService: NgxUiLoaderService, private auth: AuthService, router: Router){ 
    auth.user$.subscribe(user => {
      if (!user) return; 
      auth.save(user);
    })
  }

  onActivate(event) {
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
    window.scroll(0,0);    
 }

}
