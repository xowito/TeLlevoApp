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
  formRecuperar: FormGroup;

  constructor(private router: Router, private alertController: AlertController, private fb: FormBuilder) {
    this.formRecuperar = this.fb.group({
      'User': new FormControl("", Validators.required),
      'Correo': new FormControl("", Validators.required)
    })

  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }
  async enviar() {{
    var f = this.formRecuperar.value;

    if (this.formRecuperar.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos incorrectos',
        message: 'Asegurate que los datos que ingresaste sean correctos',
        buttons: ['OK']
      });

      await alert.present();
      return;

    } var usuario = {
      User: f.User,
      Correo: f.Correo
    }
  }
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['../home'])
    if (!this.formRecuperar.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos Correctos',
        message: 'Se a enviado un correo de recuperacion',
        buttons: ['OK']
      });

      await alert.present();
      return;


    }

  }
  ngOnInit() {
  }

  volver() {
    this.router.navigate(['../home'])
  }
}
