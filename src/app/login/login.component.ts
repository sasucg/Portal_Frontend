import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
  //   const authModel = this.form.value;
  //   this.auth
  //     .authenticate(authModel.login, authModel.password)
  //     .subscribe(response => {
  //       if (response) {
  //         this.router.navigateByUrl(this.returnUrl);
  //       }
  //       this.errorMessage = 'Authentication Failed';
  //     });
  // }
  }
}