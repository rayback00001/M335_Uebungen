import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  inputMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'OK',
        handler: (alertData) => {
          this.inputMessage = alertData.name
        }
      }],
      inputs: [
        {
          name: 'name',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 15,
          }
        }
      ]
    });
    await alert.present();

   

    
  }


  
}


