import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: any = FormGroup; 


  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null),
      passwort: new FormControl(null)
    });
  }

  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Email: " + this.registerForm.get('email').value);
    console.log("Firstname: " + this.registerForm.get('passwort').value);
  }
}
