import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Add ReactiveFormsModule to the imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsletterPageRoutingModule } from './newsletter-routing.module';

import { NewsletterPage } from './newsletter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsletterPageRoutingModule,
    ReactiveFormsModule // Add this line
  ],
  declarations: [NewsletterPage]
})
export class NewsletterPageModule {}
