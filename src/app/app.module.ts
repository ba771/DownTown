import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import{ RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{ MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    LoginComponent,
    SignupComponent,
    SidenavComponent
  ],
  imports: [
    MatListModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path:'login', component:LoginComponent},
      { path:'signup', component:SignupComponent},
      { path:'hub', component:ProductItemComponent}
    ]),

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
