import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material.module';
import { AppRoutingModule } from './app.routing.module';
// import { UserComponent } from './user/user.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page/landing-page-routing.module';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    AboutComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    LandingPageRoutingModule,
    FloatingLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
