import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegistration: app.models.RegisterUserModel = { lastName: "", firstName: "", phoneNumber: "", email: "" } as app.models.RegisterUserModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() { 
    console.log(this.userRegistration);
  }

  goToLoginPage() { 
    this.router.navigate(["login/"]);
  }

  goToPrivacy() { 
    console.log("not implemented");
  }

  goToTerms() { 
    console.log("not implemented");
  }

  goToHelp() { 
    console.log("not implemented");
  }
}
