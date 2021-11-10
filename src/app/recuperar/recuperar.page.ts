import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {

    }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }
  async enviar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Correo enviado',
      message: 'Se ha enviado un correo para reestablecer su contraseña',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }
ngOnInit() {
}

volver(){
  this.router.navigate(['../login'])
}
}
