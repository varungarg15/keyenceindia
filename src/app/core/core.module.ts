import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmComponent } from './agm/agm.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,AgmComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlAS-bx-M16bI-vm8RUDIE3z02MdhWEFQ'
    }),
    RouterModule
  ],
  exports:[
    HeaderComponent,FooterComponent,AgmComponent
  ]
})
export class CoreModule { }
