import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
// import {UserComponent} from '../user/user.component';

const routes: Routes = [
  //{ path: 'user', component: UserComponent },
  {path : '', component : LandingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }