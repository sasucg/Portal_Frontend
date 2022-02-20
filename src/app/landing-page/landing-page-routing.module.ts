import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

const routes: Routes = [{
    path: '',
    children: [
        { path: "login", component: LoginComponent},
        { path: "register", component: RegisterComponent},
        { path: "about", component: AboutComponent}
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LandingPageRoutingModule { }