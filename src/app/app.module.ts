import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ShoppingModule } from './shopping/shopping.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
// import {FirebaseUIModule} from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
// currently there is a bug while building the app with --prod
// - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// the plugin exposes the two libraries as well. You can use those:
import { NgxUiLoaderModule } from  'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    ProductModule,
    ShoppingModule,
    AngularFireModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
