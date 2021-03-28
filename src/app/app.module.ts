import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import{ RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path:'login', component:LoginComponent},
      { path:'signup', component:SignupComponent},
      { path:'hub', component:ProductItemComponent}
    ])

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
