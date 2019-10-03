import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [RegisterComponent,LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    CoreModule
  ],
})
export class AuthModule { }
