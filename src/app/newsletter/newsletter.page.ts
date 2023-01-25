import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  //create FormGroup
  contactForm: any = FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('',  Validators.email)
    });
  }

  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Email: " + this.contactForm.get('email').value);
  }

}
