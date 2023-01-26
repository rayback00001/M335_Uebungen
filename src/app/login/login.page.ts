import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   // formGroup erstellen
   loginForm: any = FormGroup; 

  constructor(private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      passwort: new FormControl(null),
      email: new FormControl(null)
    });
  }

  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Lastname: " + this.loginForm.get('passwort').value);
    console.log("Email: " + this.loginForm.get('email').value);
  }

  navigateToDetail() {
    this.router.navigateByUrl('/register');
}

}
