import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRegisterPage() { 
    this.router.navigate(["register/"]);
  }
  
  goToLoginPage() { 
    this.router.navigate(["login/"]);
  }

  goToAboutPage() { 
    this.router.navigate(["about/"]);
  }
}
